import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheetsyapplicationfeatureslegacyiomdfeaturesetsypage } from "../../pages/generated/features-legacy-iomd-features-etsy.page";

Then("user enters password in the signup page of Etsy", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheetsyapplicationfeatureslegacyiomdfeaturesetsypage.userEntersPasswordInTheSignupPageOfEtsy();
});

