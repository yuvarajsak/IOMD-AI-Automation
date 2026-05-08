import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthebluestarcoffeeroastersapplicationfeatureslegacyiomdfeaturesbluestarcoffeeroasterspage } from "../../pages/generated/features-legacy-iomd-features-blue-star-coffee-roasters.page";

When("user enters data in signup page for BlueStarCoffee website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthebluestarcoffeeroastersapplicationfeatureslegacyiomdfeaturesbluestarcoffeeroasterspage.userEntersDataInSignupPageForBluestarcoffeeWebsite();
});
Then("user verifies Register from interaction tab", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthebluestarcoffeeroastersapplicationfeatureslegacyiomdfeaturesbluestarcoffeeroasterspage.userVerifiesRegisterFromInteractionTab();
});

