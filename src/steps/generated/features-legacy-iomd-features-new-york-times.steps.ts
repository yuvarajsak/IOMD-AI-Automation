import { Given, Then, When } from "@wdio/cucumber-framework";
import { i2i36validatestheauofilloperationinthehindustantimeswebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesnewyorktimespage } from "../../pages/generated/features-legacy-iomd-features-new-york-times.page";

When("user enters valid email in Nytimes", async function () {
  await i2i36validatestheauofilloperationinthehindustantimeswebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesnewyorktimespage.userEntersValidEmailInNytimes();
});
Then("user clicks on the continue button", async function () {
  await i2i36validatestheauofilloperationinthehindustantimeswebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesnewyorktimespage.userClicksOnTheContinueButton();
});
Then("user enters password in the signup page of nytimes", async function () {
  await i2i36validatestheauofilloperationinthehindustantimeswebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesnewyorktimespage.userEntersPasswordInTheSignupPageOfNytimes();
});
Then("user clicks {string} button by name in nytimes", async function (continueValue: string) {
  await i2i36validatestheauofilloperationinthehindustantimeswebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesnewyorktimespage.userClicksContinueButtonByNameInNytimes(continueValue);
});

