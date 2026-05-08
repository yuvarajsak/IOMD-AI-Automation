import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheskullcandyapplicationfeatureslegacyiomdfeaturesskullcandypage } from "../../pages/generated/features-legacy-iomd-features-skull-candy.page";

When("user fills address for skullcandy", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheskullcandyapplicationfeatureslegacyiomdfeaturesskullcandypage.userFillsAddressForSkullcandy();
});

