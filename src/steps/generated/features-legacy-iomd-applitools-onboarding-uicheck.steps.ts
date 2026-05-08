import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage } from "../../pages/generated/features-legacy-iomd-applitools-onboarding-uicheck.page";

Given("I initiate applitools eyes to proceed validation for {string}", async function (testcase: string) {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.iInitiateApplitoolsEyesToProceedValidationForTestcase(testcase);
});
When("user validates Allow popup screen on launching the application", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesAllowPopupScreenOnLaunchingTheApplication();
});
When("user validates splash screen of the application", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesSplashScreenOfTheApplication();
});
When("user validates checkbox screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesCheckboxScreen();
});
When("user validates BeginSetup screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesBeginsetupScreen();
});
When("user validates Setup step1 screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesSetupStep1Screen();
});
When("user validates tell your friends screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesTellYourFriendsScreen();
});
When("user validates Setup step2 screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesSetupStep2Screen();
});
When("user enables extension and switch back to the app", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userEnablesExtensionAndSwitchBackToTheApp();
});
When("user validates Enables extension screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesEnablesExtensionScreen();
});
When("user validates animated cards in the homepage", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesAnimatedCardsInTheHomepage();
});
When("user validates forward email screen on welcome email", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesForwardEmailScreenOnWelcomeEmail();
});
When("user validates Business Tab screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesBusinessTabScreen();
});
When("user validates Interaction Tab screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesInteractionTabScreen();
});
When("user validates Messages Tab screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesMessagesTabScreen();
});
When("user validates Settings screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesSettingsScreen();
});
When("user validates Profile Information screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesProfileInformationScreen();
});
When("user validates ShowMeMagic in Settings screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesShowmemagicInSettingsScreen();
});
When("user validates Credentials in Settings screen", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userValidatesCredentialsInSettingsScreen();
});
Then("user closes applitools eyes after validation", async function () {
  await tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage.userClosesApplitoolsEyesAfterValidation();
});

