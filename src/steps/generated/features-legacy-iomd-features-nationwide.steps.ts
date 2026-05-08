import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthenationwideapplicationfeatureslegacyiomdfeaturesnationwidepage } from "../../pages/generated/features-legacy-iomd-features-nationwide.page";

When("user enters data in signin page for Nationwide website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthenationwideapplicationfeatureslegacyiomdfeaturesnationwidepage.userEntersDataInSigninPageForNationwideWebsite();
});
When("user enters data in signup page for Nationwide website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthenationwideapplicationfeatureslegacyiomdfeaturesnationwidepage.userEntersDataInSignupPageForNationwideWebsite();
});

