import fs from "node:fs/promises";
import path from "node:path";
import { ensureDir, legacyStepRoot, walk, workspaceRoot } from "./shared";

interface StepCatalogEntry {
  file: string;
  annotation: string;
  expression: string;
  methodName: string;
}

const parseStepFile = (content: string, filePath: string): StepCatalogEntry[] => {
  const entries: StepCatalogEntry[] = [];
  const regex =
    /@(Given|When|Then|And)\("?\^?([^"]+?)\$?"?\)\s+public void (\w+)\(([\s\S]*?)\)\s+throws Throwable/g;

  for (const match of content.matchAll(regex)) {
    entries.push({
      file: filePath,
      annotation: match[1],
      expression: match[2],
      methodName: match[3]
    });
  }

  return entries;
};

export const extractJavaSteps = async (): Promise<void> => {
  const files = await walk(legacyStepRoot, ".java");
  const catalog = [];

  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    catalog.push(...parseStepFile(content, path.relative(workspaceRoot, file)));
  }

  const outputDir = path.join(workspaceRoot, "src/migration/generated");
  await ensureDir(outputDir);
  await fs.writeFile(path.join(outputDir, "java-step-catalog.json"), JSON.stringify(catalog, null, 2), "utf8");
  console.log(`Extracted ${catalog.length} Java step definitions into migration/generated/java-step-catalog.json`);
};

const isDirectRun = process.argv[1]?.endsWith(path.join("src", "migration", "extract-java-steps.ts"));

if (isDirectRun) {
  extractJavaSteps().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
