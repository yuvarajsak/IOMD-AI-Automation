import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage } from "../../pages/generated/features-legacy-iomd-features-fidelity.page";

When("user selects User name from Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage.userSelectsUserNameFromExtension();
});
Then("user verifies the auto fill details for FirstName are filled as expected for the Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage.userVerifiesTheAutoFillDetailsForFirstnameAreFilledAsExpectedForTheWebsite();
});
Then("user verifies the auto fill details for LastName are filled as expected for the Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage.userVerifiesTheAutoFillDetailsForLastnameAreFilledAsExpectedForTheWebsite();
});
When("user selects Anonymous Email from Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage.userSelectsAnonymousEmailFromExtension();
});
When("user selects Phonenumber from Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage.userSelectsPhonenumberFromExtension();
});
When("user select Other Address from Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage.userSelectOtherAddressFromExtension();
});
Then("user verifies the auto fill details for Email are filled as expected for the Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage.userVerifiesTheAutoFillDetailsForEmailAreFilledAsExpectedForTheWebsite();
});
Then("user verifies the auto fill details for ZipCode are filled as expected for the Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage.userVerifiesTheAutoFillDetailsForZipcodeAreFilledAsExpectedForTheWebsite();
});
Then("user verifies the auto fill details for PhoneNumber with format in the Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefidelityapplicationfeatureslegacyiomdfeaturesfidelitypage.userVerifiesTheAutoFillDetailsForPhonenumberWithFormatInTheWebsite();
});

