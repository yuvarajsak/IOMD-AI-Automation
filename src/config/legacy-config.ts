import fs from "node:fs/promises";
import path from "node:path";

export const readJavaProperties = async (filePath: string): Promise<Record<string, string>> => {
  const content = await fs.readFile(filePath, "utf8");
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .reduce<Record<string, string>>((acc, line) => {
      const index = line.indexOf("=");
      if (index === -1) {
        return acc;
      }
      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();
      acc[key] = value;
      return acc;
    }, {});
};

export const loadLegacyConfig = async (): Promise<Record<string, string>> => {
  const configPath = path.resolve(process.cwd(), "../IOMD_MobileAutomation/Input/config.properties");
  return readJavaProperties(configPath);
};
