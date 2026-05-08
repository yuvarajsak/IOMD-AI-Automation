import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheecoyaapplicationfeatureslegacyiomdfeaturesecoyapage } from "../../pages/generated/features-legacy-iomd-features-ecoya.page";

When("user close the popup in Ecoya Website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheecoyaapplicationfeatureslegacyiomdfeaturesecoyapage.userCloseThePopupInEcoyaWebsite();
});
When("user enters data in signin page for Ecoya website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheecoyaapplicationfeatureslegacyiomdfeaturesecoyapage.userEntersDataInSigninPageForEcoyaWebsite();
});

