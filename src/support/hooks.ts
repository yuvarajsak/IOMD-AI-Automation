import path from "node:path";
import { After, AfterStep, Before, BeforeStep } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import { mkdir, writeFile } from "node:fs/promises";
import { ensureReportDirs, safeName, screenshotDir, writeScenarioReport, type ReportStepStatus, type ScenarioReportDraft } from "./reports";

let activeScenario: ScenarioReportDraft | undefined;
let activeStepStartedAt = 0;

const saveStepScreenshot = async (scenarioName: string, stepText: string, phase: "before" | "after" | "failed"): Promise<string | undefined> => {
  try {
    await mkdir(screenshotDir, { recursive: true });
    const fileName = `${Date.now()}-${phase}-${safeName(scenarioName)}-${safeName(stepText)}.png`;
    const screenshot = await driver.takeScreenshot();
    const screenshotPath = path.join(screenshotDir, fileName);
    await writeFile(screenshotPath, screenshot, "base64");
    allureReporter.addAttachment(`${phase}: ${stepText}`, Buffer.from(screenshot, "base64"), "image/png");
    return screenshotPath;
  } catch (error) {
    console.warn(`Unable to save ${phase} screenshot for "${stepText}": ${(error as Error).message}`);
  }
  return undefined;
};

Before(async function (scenario) {
  await ensureReportDirs();
  await driver.setTimeout({ implicit: 10000 });
  activeScenario = {
    id: scenario.pickle.id ?? `${Date.now()}-${safeName(scenario.pickle.name)}`,
    feature: scenario.gherkinDocument.feature?.name,
    name: scenario.pickle.name,
    tags: scenario.pickle.tags.map((tag) => tag.name),
    status: "UNKNOWN",
    startTime: new Date().toISOString(),
    startEpoch: Date.now(),
    platform: String((driver.capabilities as WebdriverIO.Capabilities).platformName ?? ""),
    device: String(
      (driver.capabilities as WebdriverIO.Capabilities)["appium:deviceName" as keyof WebdriverIO.Capabilities] ??
        (driver.capabilities as WebdriverIO.Capabilities).browserName ??
        ""
    ),
    steps: []
  };
  allureReporter.addFeature(scenario.gherkinDocument.feature?.name ?? "Mobile Automation");
  scenario.pickle.tags.forEach((tag) => allureReporter.addLabel("tag", tag.name.replace(/^@/, "")));
  console.log(`Starting scenario: ${scenario.pickle.name}`);
});

BeforeStep(async function ({ pickle, pickleStep }) {
  activeStepStartedAt = Date.now();
  if (process.env.CAPTURE_ALL_STEP_SCREENSHOTS === "true") {
    await saveStepScreenshot(pickle.name, pickleStep.text, "before");
  }
});

AfterStep(async function ({ pickle, pickleStep, result }) {
  const status = normalizeStatus(result?.status);
  const screenshot = result?.status === "FAILED" || process.env.CAPTURE_ALL_STEP_SCREENSHOTS === "true"
    ? await saveStepScreenshot(pickle.name, pickleStep.text, result?.status === "FAILED" ? "failed" : "after")
    : undefined;
  activeScenario?.steps.push({
    text: pickleStep.text,
    status,
    durationMs: Math.max(Date.now() - activeStepStartedAt, 0),
    error: result?.message,
    screenshot
  });
});

After(async function (scenario) {
  if (scenario.result?.status === "FAILED") {
    await saveStepScreenshot(scenario.pickle.name, "scenario-end", "failed");
  }
  if (activeScenario) {
    const endTime = new Date().toISOString();
    await writeScenarioReport({
      ...activeScenario,
      status: normalizeStatus(scenario.result?.status),
      endTime,
      durationMs: Date.now() - activeScenario.startEpoch,
      error: scenario.result?.message
    });
    activeScenario = undefined;
  }
  console.log(`Finished scenario: ${scenario.pickle.name} -> ${scenario.result?.status ?? "UNKNOWN"}`);
});

const normalizeStatus = (status?: string): ReportStepStatus => {
  if (status === "PASSED" || status === "FAILED" || status === "SKIPPED") {
    return status;
  }
  return "UNKNOWN";
};
