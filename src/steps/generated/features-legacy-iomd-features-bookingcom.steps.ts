import { Given, Then, When } from "@wdio/cucumber-framework";
import { tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthebookingapplicationfeatureslegacyiomdfeaturesbookingcompage } from "../../pages/generated/features-legacy-iomd-features-bookingcom.page";

When("user enters random email in Email Id textbox for booking website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthebookingapplicationfeatureslegacyiomdfeaturesbookingcompage.userEntersRandomEmailInEmailIdTextboxForBookingWebsite();
});
Then("user fills password for booking website", async function () {
  await tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthebookingapplicationfeatureslegacyiomdfeaturesbookingcompage.userFillsPasswordForBookingWebsite();
});

