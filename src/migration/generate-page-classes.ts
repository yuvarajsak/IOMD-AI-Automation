import fs from "node:fs/promises";
import path from "node:path";
import { ensureDir, legacyJavaRoot, workspaceRoot } from "./shared";

type MethodDef = {
  name: string;
  args: Array<{ name: string; type: string }>;
  returnsBoolean: boolean;
};

type ClassConfig = {
  javaFile: string;
  className: string;
  tsFile: string;
  tsClass: string;
};

const classConfigs: ClassConfig[] = [
  {
    javaFile: path.join(legacyJavaRoot, "iomd_pages/commonUtilityMethods.java"),
    className: "commonUtilityMethods",
    tsFile: "common-utility-methods.page.ts",
    tsClass: "CommonUtilityMethodsPage"
  },
  {
    javaFile: path.join(legacyJavaRoot, "iomd_pages/HomePage.java"),
    className: "HomePage",
    tsFile: "home.page.ts",
    tsClass: "HomePage"
  },
  {
    javaFile: path.join(legacyJavaRoot, "iomd_pages/iomdPayMethods.java"),
    className: "iomdPayMethods",
    tsFile: "iomd-pay.page.ts",
    tsClass: "IomdPayMethodsPage"
  }
];

const normalizeArgs = (raw: string): Array<{ name: string; type: string }> => {
  const trimmed = raw.trim();
  if (!trimmed) {
    return [];
  }

  return trimmed
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const cleaned = part.replace(/final\s+/g, "").trim();
      const pieces = cleaned.split(/\s+/);
      const name = pieces.at(-1) ?? "arg";
      return { name, type: "string" };
    });
};

const parseMethods = (source: string): MethodDef[] => {
  const regex = /public static (boolean|void)\s+(\w+)\(([^)]*)\)\s*(?:throws Throwable)?\s*\{/g;
  const methods: MethodDef[] = [];
  for (const match of source.matchAll(regex)) {
    methods.push({
      returnsBoolean: match[1] === "boolean",
      name: match[2],
      args: normalizeArgs(match[3])
    });
  }
  return methods;
};

const renderClass = (config: ClassConfig, methods: MethodDef[]): string => {
  const methodBlocks = methods
    .map((method) => {
      const params = method.args.map((arg) => `${arg.name}: ${arg.type}`).join(", ");
      const argNames = `[${method.args.map((arg) => JSON.stringify(arg.name)).join(", ")}]`;
      const argValues = `[${method.args.map((arg) => arg.name).join(", ")}]`;
      const returnType = method.returnsBoolean ? "Promise<boolean>" : "Promise<void>";
      const invocation = `await legacyJavaMethodBridge.execute(${JSON.stringify(config.className)}, ${JSON.stringify(method.name)}, ${argNames}, ${argValues})`;
      return [
        `  async ${method.name}(${params}): ${returnType} {`,
        method.returnsBoolean ? `    return Boolean(${invocation});` : `    ${invocation};`,
        "  }"
      ].join("\n");
    })
    .join("\n\n");

  return [
    'import { BasePage } from "./base.page";',
    'import { legacyJavaMethodBridge } from "../support/legacy-java-method-bridge";',
    "",
    `export class ${config.tsClass} extends BasePage {`,
    "  constructor() {",
    `    super("${config.tsClass}");`,
    "  }",
    "",
    methodBlocks,
    "}",
    "",
    `export const ${config.tsClass.charAt(0).toLowerCase() + config.tsClass.slice(1)} = new ${config.tsClass}();`,
    ""
  ].join("\n");
};

export const generatePageClasses = async (): Promise<void> => {
  const outputDir = path.join(workspaceRoot, "src/pages");
  await ensureDir(outputDir);

  for (const config of classConfigs) {
    const source = await fs.readFile(config.javaFile, "utf8");
    const methods = parseMethods(source);
    const rendered = renderClass(config, methods);
    await fs.writeFile(path.join(outputDir, config.tsFile), rendered, "utf8");
  }

  console.log(`Generated ${classConfigs.length} TypeScript page classes from Java source.`);
};

const isDirectRun = process.argv[1]?.endsWith(path.join("src", "migration", "generate-page-classes.ts"));

if (isDirectRun) {
  generatePageClasses().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
