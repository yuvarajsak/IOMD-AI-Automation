import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { After, AfterStep, Before, BeforeStep } from "@wdio/cucumber-framework";

const screenshotDir = path.resolve(process.cwd(), "artifacts", "screenshots");

const safeName = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

const saveStepScreenshot = async (scenarioName: string, stepText: string, phase: "before" | "after" | "failed"): Promise<void> => {
  try {
    await mkdir(screenshotDir, { recursive: true });
    const fileName = `${Date.now()}-${phase}-${safeName(scenarioName)}-${safeName(stepText)}.png`;
    const screenshot = await driver.takeScreenshot();
    await writeFile(path.join(screenshotDir, fileName), screenshot, "base64");
  } catch (error) {
    console.warn(`Unable to save ${phase} screenshot for "${stepText}": ${(error as Error).message}`);
  }
};

Before(async function (scenario) {
  await driver.setTimeout({ implicit: 10000 });
  console.log(`Starting scenario: ${scenario.pickle.name}`);
});

BeforeStep(async function ({ pickle, pickleStep }) {
  if (process.env.CAPTURE_ALL_STEP_SCREENSHOTS === "true") {
    await saveStepScreenshot(pickle.name, pickleStep.text, "before");
  }
});

AfterStep(async function ({ pickle, pickleStep, result }) {
  if (result?.status === "FAILED" || process.env.CAPTURE_ALL_STEP_SCREENSHOTS === "true") {
    await saveStepScreenshot(pickle.name, pickleStep.text, result?.status === "FAILED" ? "failed" : "after");
  }
});

After(async function (scenario) {
  if (scenario.result?.status === "FAILED") {
    await saveStepScreenshot(scenario.pickle.name, "scenario-end", "failed");
  }
  console.log(`Finished scenario: ${scenario.pickle.name} -> ${scenario.result?.status ?? "UNKNOWN"}`);
});
