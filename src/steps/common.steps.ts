import { Given, Then, When } from "@wdio/cucumber-framework";
import { generatedPage } from "../pages/generated/generated.page";

Given("user launches the application", async function () {
  await driver.launchApp();
});

When("user closes the application", async function () {
  await driver.closeApp();
});

Then(
  /^generated step "([^"]+)"(?: with parameters)?$/,
  async function (stepKey: string, dataTable?: { rowsHash: () => Record<string, string> }) {
    const parameters = dataTable?.rowsHash?.() ?? {};
    await generatedPage.runStep(stepKey, parameters);
  }
);
