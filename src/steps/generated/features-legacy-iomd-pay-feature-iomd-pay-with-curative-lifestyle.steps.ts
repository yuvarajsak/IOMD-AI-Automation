import { Given, Then, When } from "@wdio/cucumber-framework";
import { i2ivalidatesiomdpayfeatureforshopifyfeatureslegacyiomdpayfeatureiomdpaywithcurativelifestylepage } from "../../pages/generated/features-legacy-iomd-pay-feature-iomd-pay-with-curative-lifestyle.page";

When("user verifies auto-filled data in Payment page", async function () {
  await i2ivalidatesiomdpayfeatureforshopifyfeatureslegacyiomdpayfeatureiomdpaywithcurativelifestylepage.userVerifiesAutoFilledDataInPaymentPage();
});
Then("user verifies deeplink content for testfairy and clicks on it", async function () {
  await i2ivalidatesiomdpayfeatureforshopifyfeatureslegacyiomdpayfeatureiomdpaywithcurativelifestylepage.userVerifiesDeeplinkContentForTestfairyAndClicksOnIt();
});

