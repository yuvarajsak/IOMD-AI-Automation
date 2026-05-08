import { Given, Then, When } from "@wdio/cucumber-framework";
import { i2ivalidatesiomdpayfeatureforwoocommercefeatureslegacyiomdpayfeatureiomdpaywithwoocommercepage } from "../../pages/generated/features-legacy-iomd-pay-feature-iomd-pay-with-woo-commerce.page";

When("user verifies the amount with shipping cost for Woocommerce", async function () {
  await i2ivalidatesiomdpayfeatureforwoocommercefeatureslegacyiomdpayfeatureiomdpaywithwoocommercepage.userVerifiesTheAmountWithShippingCostForWoocommerce();
});
Then("user verifies the amount with shipping cost for Woocommerce with discount", async function () {
  await i2ivalidatesiomdpayfeatureforwoocommercefeatureslegacyiomdpayfeatureiomdpaywithwoocommercepage.userVerifiesTheAmountWithShippingCostForWoocommerceWithDiscount();
});

