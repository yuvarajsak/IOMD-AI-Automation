import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage } from "../../pages/generated/features-legacy-iomd-features-activity-hero.page";

When("user completes onboarding flow", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userCompletesOnboardingFlow();
});
When("user clicks {string} link by value in the Website", async function (signin: string) {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userClicksSigninLinkByValueInTheWebsite(signin);
});
When("user enables the Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userEnablesTheExtension();
});
When("user selects tokenised Email from Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userSelectsTokenisedEmailFromExtension();
});
Then("user clicks Fill button from Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userClicksFillButtonFromExtension();
});
Then("user verifies the auto fill details for tokenised Email are filled as expected for the Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite();
});
When("user selects personal Address from Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userSelectsPersonalAddressFromExtension();
});
Then("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite();
});
When("user selects personal Username from Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userSelectsPersonalUsernameFromExtension();
});
Then("user verifies the auto fill details for personal FirstName are filled as expected for the Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite();
});
Then("user verifies the auto fill details for personal LastName are filled as expected for the Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheactivityheroapplicationfeatureslegacyiomdfeaturesactivityheropage.userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite();
});

