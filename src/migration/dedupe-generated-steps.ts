import fs from "node:fs/promises";
import path from "node:path";
import { walk, workspaceRoot } from "./shared";

const stepsRoot = path.join(workspaceRoot, "src/steps/generated");

export const dedupeGeneratedSteps = async (): Promise<void> => {
  const files = await walk(stepsRoot, ".ts");
  const seenExpressions = new Set<string>();
  let removed = 0;

  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    const lines = source.split(/\r?\n/);
    const output: string[] = [];
    let index = 0;

    while (index < lines.length) {
      const line = lines[index];
      const match = line.match(/^(Given|When|Then)\("([^"]+)"/);

      if (!match) {
        output.push(line);
        index += 1;
        continue;
      }

      const expression = match[2];
      const block: string[] = [line];
      index += 1;

      while (index < lines.length) {
        block.push(lines[index]);
        if (lines[index] === "});") {
          index += 1;
          break;
        }
        index += 1;
      }

      if (seenExpressions.has(expression)) {
        removed += 1;
        continue;
      }

      seenExpressions.add(expression);
      output.push(...block);
    }

    await fs.writeFile(file, `${output.join("\n").replace(/\n{3,}/g, "\n\n")}\n`, "utf8");
  }

  console.log(`Removed ${removed} duplicate generated step bindings.`);
};

const isDirectRun = process.argv[1]?.endsWith(path.join("src", "migration", "dedupe-generated-steps.ts"));

if (isDirectRun) {
  dedupeGeneratedSteps().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
