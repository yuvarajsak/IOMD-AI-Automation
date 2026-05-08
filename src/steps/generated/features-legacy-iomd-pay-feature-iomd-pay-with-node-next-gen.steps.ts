import { Given, Then, When } from "@wdio/cucumber-framework";
import { i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyiomdpayfeatureiomdpaywithnodenextgenpage } from "../../pages/generated/features-legacy-iomd-pay-feature-iomd-pay-with-node-next-gen.page";

Then("user fills card data in checkout page for BuyAgain", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyiomdpayfeatureiomdpaywithnodenextgenpage.userFillsCardDataInCheckoutPageForBuyagain();
});

