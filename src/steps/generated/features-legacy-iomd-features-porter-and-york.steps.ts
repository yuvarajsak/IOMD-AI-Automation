import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheporterandyorkapplicationfeatureslegacyiomdfeaturesporterandyorkpage } from "../../pages/generated/features-legacy-iomd-features-porter-and-york.page";

When("user selects first product from PorterAndYork application", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheporterandyorkapplicationfeatureslegacyiomdfeaturesporterandyorkpage.userSelectsFirstProductFromPorterandyorkApplication();
});

