import fs from "node:fs/promises";
import path from "node:path";

export const workspaceRoot = process.cwd();
export const repoRoot = path.resolve(workspaceRoot, "..");
export const legacyRoot = path.join(repoRoot, "IOMD_MobileAutomation");
export const legacyResourcesRoot = path.join(legacyRoot, "src/test/resources");
export const legacyJavaRoot = path.join(legacyRoot, "src/main/java");
export const legacyStepRoot = path.join(legacyRoot, "src/test/java/iomd_stepdef");

export const ensureDir = async (dir: string): Promise<void> => {
  await fs.mkdir(dir, { recursive: true });
};

export const walk = async (dir: string, extension?: string): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath, extension);
      }
      if (!extension || fullPath.endsWith(extension)) {
        return [fullPath];
      }
      return [];
    })
  );
  return nested.flat();
};
