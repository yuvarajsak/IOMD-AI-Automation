import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheamazonapplicationfeatureslegacyiomdfeaturesamazonpage } from "../../pages/generated/features-legacy-iomd-features-amazon.page";

Then("user accepts the accept all cookies button", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheamazonapplicationfeatureslegacyiomdfeaturesamazonpage.userAcceptsTheAcceptAllCookiesButton();
});
When("user enters data in signup page for amazon website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheamazonapplicationfeatureslegacyiomdfeaturesamazonpage.userEntersDataInSignupPageForAmazonWebsite();
});

