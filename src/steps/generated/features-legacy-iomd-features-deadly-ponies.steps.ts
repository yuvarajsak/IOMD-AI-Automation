import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthedeadlyponiesapplicationfeatureslegacyiomdfeaturesdeadlyponiespage } from "../../pages/generated/features-legacy-iomd-features-deadly-ponies.page";

When("user enters data in signin page for deadlyponies website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthedeadlyponiesapplicationfeatureslegacyiomdfeaturesdeadlyponiespage.userEntersDataInSigninPageForDeadlyponiesWebsite();
});
Then("user clicks close pop in deadlyponies", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthedeadlyponiesapplicationfeatureslegacyiomdfeaturesdeadlyponiespage.userClicksClosePopInDeadlyponies();
});

