import { Given, Then, When } from "@wdio/cucumber-framework";
import { i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage } from "../../pages/generated/features-legacy-iomd-features-email-tab.page";

When("user enters the {string} in the inputbox", async function (emailid: string) {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userEntersTheEmailidInTheInputbox(emailid);
});
Then("user clicks on the fetch button", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userClicksOnTheFetchButton();
});
When("user launches the coravin website {string}", async function (url: string) {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userLaunchesTheCoravinWebsiteUrl(url);
});
When("user enables the extension and verifies the expected details are present for the page", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userEnablesTheExtensionAndVerifiesTheExpectedDetailsArePresentForThePage();
});
Then("user verifies the display of the header {string}", async function (headervalue: string) {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userVerifiesTheDisplayOfTheHeaderHeadervalue(headervalue);
});
When("user verifies the verifies the display of the feedback linkn {string}", async function (feedback: string) {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userVerifiesTheVerifiesTheDisplayOfTheFeedbackLinknFeedback(feedback);
});
When("User verifies the display of the name {string} and email {string} headers present in the extension", async function (name: string, emailid: string) {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userVerifiesTheDisplayOfTheNameNameAndEmailEmailidHeadersPresentInTheExtension(name, emailid);
});
Then("user selects the value from the extension and clicks on the fill button", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userSelectsTheValueFromTheExtensionAndClicksOnTheFillButton();
});
When("user verifies the details are getting entered in the correct field as expected", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userVerifiesTheDetailsAreGettingEnteredInTheCorrectFieldAsExpected();
});
Then("user clicks on the signInOrSignUpButton in the coravin website", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userClicksOnTheSigninorsignupbuttonInTheCoravinWebsite();
});
When("user verifies the details are getting entered as expected in the field box", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userVerifiesTheDetailsAreGettingEnteredAsExpectedInTheFieldBox();
});
When("user clicks on the sign in button", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userClicksOnTheSignInButton();
});
When("user verifies the display of the autofill det ails are entered as expected", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userVerifiesTheDisplayOfTheAutofillDetAilsAreEnteredAsExpected();
});
Then("user verifies the autofill extension and verifies no details is getting displayed", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userVerifiesTheAutofillExtensionAndVerifiesNoDetailsIsGettingDisplayed();
});
Then("user clicks on the signIn button", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userClicksOnTheSigninButton();
});
When("user selects the address and phone number {string} in the autofill option", async function (phonenumber: string) {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userSelectsTheAddressAndPhoneNumberPhonenumberInTheAutofillOption(phonenumber);
});
Then("user clicks on the credit card details and clicks on the fill button", async function () {
  await i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage.userClicksOnTheCreditCardDetailsAndClicksOnTheFillButton();
});

