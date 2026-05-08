import { extractJavaSteps } from "./extract-java-steps";
import { migrateFeatures } from "./migrate-features";
import { migrateLocators } from "./migrate-locators";

const main = async (): Promise<void> => {
  await migrateLocators();
  await extractJavaSteps();
  await migrateFeatures();
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
