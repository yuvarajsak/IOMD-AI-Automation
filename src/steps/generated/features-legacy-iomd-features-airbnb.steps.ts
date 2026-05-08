import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheairbnbapplicationfeatureslegacyiomdfeaturesairbnbpage } from "../../pages/generated/features-legacy-iomd-features-airbnb.page";

When("user enters random email in Email Id textbox for airbnb website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheairbnbapplicationfeatureslegacyiomdfeaturesairbnbpage.userEntersRandomEmailInEmailIdTextboxForAirbnbWebsite();
});
When("user verifies Others from interaction tab", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheairbnbapplicationfeatureslegacyiomdfeaturesairbnbpage.userVerifiesOthersFromInteractionTab();
});

