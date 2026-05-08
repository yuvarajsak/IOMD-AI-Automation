import fs from "node:fs/promises";
import path from "node:path";
import { Parser } from "@cucumber/gherkin";
import { AstBuilder, GherkinClassicTokenMatcher } from "@cucumber/gherkin";
import { IdGenerator } from "@cucumber/messages";
import { createProvider } from "./provider-factory";
import type { GenerationPayload, StepDefinitionModel } from "./types";

const reservedWords = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield"
]);

export const slugify = (value: string): string =>
  value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

export const pascalCase = (value: string): string =>
  value
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");

export const camelCase = (value: string): string => {
  const parts = pascalCase(value);
  return parts.charAt(0).toLowerCase() + parts.slice(1);
};

const sanitizeIdentifier = (value: string, fallback: string): string => {
  const cleaned = camelCase(value).replace(/[^a-zA-Z0-9_$]/g, "");
  const normalized = cleaned && /^[A-Za-z_$]/.test(cleaned) ? cleaned : `${fallback}${pascalCase(cleaned || value)}`;
  return reservedWords.has(normalized) ? `${normalized}Value` : normalized;
};

const extractParameters = (stepText: string): { expression: string; parameters: string[] } => {
  const parameters: string[] = [];
  let index = 0;
  const expression = stepText.replace(/<([^>]+)>|"([^"]+)"/g, (_match, placeholder, quoted) => {
    const label = sanitizeIdentifier(placeholder ?? quoted ?? `param${index + 1}`, `param${index + 1}`);
    parameters.push(label);
    index += 1;
    return "{string}";
  });
  return { expression, parameters };
};

const uniqueByText = (steps: StepDefinitionModel[]): StepDefinitionModel[] => {
  const seen = new Set<string>();
  return steps.filter((step) => {
    if (seen.has(step.text)) {
      return false;
    }
    seen.add(step.text);
    return true;
  });
};

export const buildStepModels = (featureSource: string): { title: string; steps: StepDefinitionModel[] } => {
  const parser = new Parser(new AstBuilder(IdGenerator.uuid()), new GherkinClassicTokenMatcher());
  const document = parser.parse(featureSource);
  const feature = document.feature;

  if (!feature) {
    throw new Error("No feature block found in the provided Gherkin file.");
  }

  const scenarioSteps = feature.children.flatMap((child) => {
    if ("background" in child && child.background) {
      return child.background.steps;
    }
    if ("scenario" in child && child.scenario) {
      return child.scenario.steps;
    }
    return [];
  });

  let previousKeyword = "When";

  const steps = uniqueByText(
    scenarioSteps.map((step) => {
      const { expression, parameters } = extractParameters(step.text);
      const stepKey = camelCase(step.text);
      const keywordType = String(step.keywordType ?? "");
      const keyword =
        keywordType === "Context"
          ? "Given"
          : keywordType === "Outcome"
            ? "Then"
            : keywordType === "Action"
              ? "When"
              : previousKeyword;

      previousKeyword = keyword;

      return {
        keyword,
        text: step.text,
        expression,
        methodName: sanitizeIdentifier(step.text, "step"),
        parameters,
        stepKey: sanitizeIdentifier(stepKey, "step")
      };
    })
  );

  return { title: feature.name, steps };
};

export const renderPage = (payload: GenerationPayload): string => {
  const methods = payload.steps
    .map((step) => {
      const params = step.parameters.map((parameter) => `${parameter}: string`).join(", ");
      const parameterEntries =
        step.parameters.length === 0
          ? "{}"
          : `{ ${step.parameters.map((parameter) => `${JSON.stringify(parameter)}: ${parameter}`).join(", ")} }`;
      return [
        `  async ${step.methodName}(${params}): Promise<void> {`,
        `    await this.executeLegacyStep(${JSON.stringify(step.text)}, ${parameterEntries});`,
        "  }"
      ].join("\n");
    })
    .join("\n\n");

  return [
    'import { BasePage } from "../base.page";',
    "",
    `export class ${payload.pageClassName} extends BasePage {`,
    "  constructor() {",
    `    super("${payload.pageClassName}");`,
    "  }",
    "",
    methods,
    "}",
    "",
    `export const ${camelCase(payload.pageClassName)} = new ${payload.pageClassName}();`,
    ""
  ].join("\n");
};

export const renderSteps = (payload: GenerationPayload): string => {
  const pageInstanceName = camelCase(payload.pageClassName);
  const imports = `import { Given, Then, When } from "@wdio/cucumber-framework";
import { ${pageInstanceName} } from "../../pages/generated/${payload.pageFileName}";`;

  const lines = payload.steps.map((step) => {
    const fnArgs = step.parameters.map((parameter) => `${parameter}: string`).join(", ");
    const callArgs = step.parameters.join(", ");
    const hook =
      step.keyword === "Given" ? "Given" : step.keyword === "Then" ? "Then" : "When";
    return [
      `${hook}(${JSON.stringify(step.expression)}, async function (${fnArgs}) {`,
      `  await ${pageInstanceName}.${step.methodName}(${callArgs});`,
      "});"
    ].join("\n");
  });

  return [imports, "", ...lines, ""].join("\n");
};

export const generateFromFeaturePath = async (inputPath: string): Promise<GenerationPayload> => {
  const featureFilePath = path.resolve(process.cwd(), inputPath);
  const featureSource = await fs.readFile(featureFilePath, "utf8");
  const { title, steps } = buildStepModels(featureSource);
  const relativeFeaturePath = path.relative(process.cwd(), featureFilePath);
  const featureSlug = slugify(relativeFeaturePath.replace(path.extname(relativeFeaturePath), ""));
  const pageClassName = `${pascalCase(title || featureSlug)}${pascalCase(featureSlug)}Page`;
  const provider = createProvider();

  const payload = await provider.generate({
    featureTitle: title,
    pageClassName,
    pageFileName: `${featureSlug}.page`,
    stepsFileName: `${featureSlug}.steps`,
    featureFilePath,
    steps
  });

  const pageDirectory = path.resolve(process.cwd(), "src/pages/generated");
  const stepDirectory = path.resolve(process.cwd(), "src/steps/generated");

  await fs.mkdir(pageDirectory, { recursive: true });
  await fs.mkdir(stepDirectory, { recursive: true });

  await fs.writeFile(path.join(pageDirectory, `${payload.pageFileName}.ts`), renderPage(payload), "utf8");
  await fs.writeFile(path.join(stepDirectory, `${payload.stepsFileName}.ts`), renderSteps(payload), "utf8");

  return payload;
};

const main = async (): Promise<void> => {
  const inputPath = process.argv[2];

  if (!inputPath) {
    throw new Error("Usage: npm run generate:steps -- ./features/my-feature.feature");
  }

  const payload = await generateFromFeaturePath(inputPath);
  const provider = createProvider();
  console.log(`Generated page object and steps using provider: ${provider.name}`);
  console.log(`Page: src/pages/generated/${payload.pageFileName}.ts`);
  console.log(`Steps: src/steps/generated/${payload.stepsFileName}.ts`);
};

const isDirectRun = process.argv[1]?.endsWith(path.join("src", "generator", "gherkin-generator.ts"));

if (isDirectRun) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
