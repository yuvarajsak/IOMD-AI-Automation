import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthegoodeggsapplicationfeatureslegacyiomdfeaturesgoodeggspage } from "../../pages/generated/features-legacy-iomd-features-good-eggs.page";

When("user launches the GoodEggs website {string}", async function (carturl: string) {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthegoodeggsapplicationfeatureslegacyiomdfeaturesgoodeggspage.userLaunchesTheGoodeggsWebsiteCarturl(carturl);
});
Then("I fill Address for Goodeggs", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthegoodeggsapplicationfeatureslegacyiomdfeaturesgoodeggspage.iFillAddressForGoodeggs();
});
Then("user Fills the card details in GoodEggs website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthegoodeggsapplicationfeatureslegacyiomdfeaturesgoodeggspage.userFillsTheCardDetailsInGoodeggsWebsite();
});

