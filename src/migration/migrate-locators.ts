import fs from "node:fs/promises";
import path from "node:path";
import { camelCase } from "../generator/gherkin-generator";
import { ensureDir, legacyJavaRoot, workspaceRoot } from "./shared";

interface LocatorEntry {
  fieldName: string;
  strategy: string;
  value: string;
}

const sourceFiles = [
  {
    source: path.join(legacyJavaRoot, "iomd_locators/IOMD_AppLocator.java"),
    targetName: "legacy-app-locators.ts",
    exportName: "legacyAppLocators"
  },
  {
    source: path.join(legacyJavaRoot, "iomd_locators/SafariLocators.java"),
    targetName: "legacy-safari-locators.ts",
    exportName: "legacySafariLocators"
  },
  {
    source: path.join(legacyJavaRoot, "iomd_locators/webPageLocators.java"),
    targetName: "legacy-web-locators.ts",
    exportName: "legacyWebLocators"
  }
];

const parseLocators = (content: string): LocatorEntry[] => {
  const entries: LocatorEntry[] = [];
  const regex = /@FindBy\((\w+)\s*=\s*"((?:\\"|[^"])*)"\)\s+private\s+WebElement\s+(\w+);/g;
  for (const match of content.matchAll(regex)) {
    entries.push({
      strategy: match[1] === "xpath" ? "xpath" : match[1],
      value: match[2].replace(/\\"/g, '"'),
      fieldName: camelCase(match[3])
    });
  }
  return entries;
};

const renderRegistry = (exportName: string, entries: LocatorEntry[]): string => {
  const body = entries
    .map(
      (entry) =>
        `  ${entry.fieldName}: { strategy: ${JSON.stringify(entry.strategy)}, value: ${JSON.stringify(entry.value)} },`
    )
    .join("\n");

  return `import type { SelectorRegistry } from "../../types/selector";

export const ${exportName}: SelectorRegistry = {
${body}
};
`;
};

export const migrateLocators = async (): Promise<void> => {
  const outputDir = path.join(workspaceRoot, "src/selectors/generated");
  await ensureDir(outputDir);

  for (const file of sourceFiles) {
    const content = await fs.readFile(file.source, "utf8");
    const entries = parseLocators(content);
    await fs.writeFile(path.join(outputDir, file.targetName), renderRegistry(file.exportName, entries), "utf8");
  }

  const indexContent = [
    'export { legacyAppLocators } from "./legacy-app-locators";',
    'export { legacySafariLocators } from "./legacy-safari-locators";',
    'export { legacyWebLocators } from "./legacy-web-locators";',
    ""
  ].join("\n");

  await fs.writeFile(path.join(outputDir, "index.ts"), indexContent, "utf8");
  console.log("Generated TypeScript selector registries from Java locator classes.");
};

const isDirectRun = process.argv[1]?.endsWith(path.join("src", "migration", "migrate-locators.ts"));

if (isDirectRun) {
  migrateLocators().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
