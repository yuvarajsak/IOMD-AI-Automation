import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheairnewzealandapplicationfeatureslegacyiomdfeaturesairnewzealandpage } from "../../pages/generated/features-legacy-iomd-features-air-newzealand.page";

When("user enters data in login page for airnewzealand website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheairnewzealandapplicationfeatureslegacyiomdfeaturesairnewzealandpage.userEntersDataInLoginPageForAirnewzealandWebsite();
});
Then("user verifies Login from interaction tab", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheairnewzealandapplicationfeatureslegacyiomdfeaturesairnewzealandpage.userVerifiesLoginFromInteractionTab();
});
When("user selects personal Phonenumber from Extension", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheairnewzealandapplicationfeatureslegacyiomdfeaturesairnewzealandpage.userSelectsPersonalPhonenumberFromExtension();
});

