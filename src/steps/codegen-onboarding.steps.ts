import { Given, Then, When } from "@wdio/cucumber-framework";
import { codegenOnboardingPage } from "../pages/codegen-onboarding.page";

Given("Codegen Step03 onboarding starts from a fresh launch", async function () {
  await codegenOnboardingPage.launchFresh();
});

When("user follows the Codegen Step03 skip Gmail path", async function () {
  await codegenOnboardingPage.continueFromSplash();
  await codegenOnboardingPage.skipGmailImport();
});

Then("Codegen Step03 create token screen is displayed", async function () {
  await codegenOnboardingPage.expectCreateTokenVisible();
});

When("user enters commerce token prefix {string}", async function (prefix: string) {
  await codegenOnboardingPage.enterCommerceToken(prefix);
});

Then("Codegen Step03 commerce token input contains {string}", async function (prefix: string) {
  await codegenOnboardingPage.expectCommerceTokenValue(prefix);
});

Then("Codegen Step03 create token controls are displayed", async function () {
  await codegenOnboardingPage.expectCreateTokenControlsVisible();
});

Then("Codegen Step03 create token helper text is displayed", async function () {
  await codegenOnboardingPage.expectCreateTokenHelperTextVisible();
});

When("user enters a unique Codegen Step03 commerce token prefix", async function () {
  await codegenOnboardingPage.enterUniqueCommerceToken();
});

When("user submits the Codegen Step03 commerce token", async function () {
  await codegenOnboardingPage.submitCommerceToken();
});

Then("Codegen Step03 token creation progress is shown", async function () {
  await codegenOnboardingPage.expectTokenCreationProgress();
});

Then("Codegen Step03 post-create success state is displayed", async function () {
  await codegenOnboardingPage.expectPostCreateSuccess();
});
