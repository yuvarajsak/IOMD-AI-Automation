import fs from "node:fs/promises";
import path from "node:path";
import { generateFromFeaturePath } from "../generator/gherkin-generator";
import { dedupeGeneratedSteps } from "./dedupe-generated-steps";
import { ensureDir, legacyResourcesRoot, walk, workspaceRoot } from "./shared";

const targetRoot = path.join(workspaceRoot, "features/legacy");

export const migrateFeatures = async (): Promise<void> => {
  const legacyFeatures = (await walk(legacyResourcesRoot, ".feature")).sort();
  await ensureDir(targetRoot);
  const skipped: Array<{ file: string; reason: string }> = [];
  let generatedCount = 0;

  for (const source of legacyFeatures) {
    const relative = path.relative(legacyResourcesRoot, source);
    const target = path.join(targetRoot, relative);
    await ensureDir(path.dirname(target));
    await fs.copyFile(source, target);
    try {
      await generateFromFeaturePath(path.relative(workspaceRoot, target));
      generatedCount += 1;
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      skipped.push({ file: relative, reason });
    }
  }

  if (skipped.length > 0) {
    await fs.writeFile(
      path.join(workspaceRoot, "src/migration/generated/skipped-features.json"),
      JSON.stringify(skipped, null, 2),
      "utf8"
    );
  }

  await dedupeGeneratedSteps();

  console.log(
    `Imported ${legacyFeatures.length} feature files and generated scaffolds for ${generatedCount}. Skipped ${skipped.length}.`
  );
};

const isDirectRun = process.argv[1]?.endsWith(path.join("src", "migration", "migrate-features.ts"));

if (isDirectRun) {
  migrateFeatures().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
