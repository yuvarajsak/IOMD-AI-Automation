import { Given, Then, When } from "@wdio/cucumber-framework";
import { validatestheauofilloperationinthetedbakerwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturestedbakerpage } from "../../pages/generated/features-legacy-iomd-features-ted-baker.page";

When("user scroll to newsletter signup form", async function () {
  await validatestheauofilloperationinthetedbakerwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturestedbakerpage.userScrollToNewsletterSignupForm();
});
When("user clicks on the go to site button", async function () {
  await validatestheauofilloperationinthetedbakerwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturestedbakerpage.userClicksOnTheGoToSiteButton();
});
When("user selects the first product in tedbaker for checking out", async function () {
  await validatestheauofilloperationinthetedbakerwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturestedbakerpage.userSelectsTheFirstProductInTedbakerForCheckingOut();
});
When("user selects address from dropdown in Tedbaker", async function () {
  await validatestheauofilloperationinthetedbakerwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturestedbakerpage.userSelectsAddressFromDropdownInTedbaker();
});

