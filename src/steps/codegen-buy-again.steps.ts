import { Given, Then, When } from "@wdio/cucumber-framework";
import { codegenBuyAgainPage } from "../pages/codegen-buy-again.page";

Given("Codegen Buy Again starts from completed onboarding", async function () {
  await codegenBuyAgainPage.startFromCompletedOnboarding();
});

When("Codegen Buy Again opens Shopify storefront {string}", async function (url: string) {
  await codegenBuyAgainPage.openShopifyStorefront(url);
});

When("Codegen Buy Again unlocks the Shopify store", async function () {
  await codegenBuyAgainPage.unlockShopifyStore();
});

When("Codegen Buy Again enables the node Safari extension", async function () {
  await codegenBuyAgainPage.enableNodeSafariExtension();
});

When("Codegen Buy Again opens the Shopify product page", async function () {
  await codegenBuyAgainPage.openShopifyProductPage();
});

When("Codegen Buy Again adds the product to cart and starts checkout", async function () {
  await codegenBuyAgainPage.addProductToCartAndStartCheckout();
});

When("Codegen Buy Again completes checkout contact details", async function () {
  await codegenBuyAgainPage.completeCheckoutContactDetails();
});

When("Codegen Buy Again enters payment details", async function () {
  await codegenBuyAgainPage.enterPaymentDetails();
});

When("Codegen Buy Again submits the order", async function () {
  await codegenBuyAgainPage.submitOrder();
});

When("Codegen Buy Again tracks the order from the thank you page", async function () {
  await codegenBuyAgainPage.trackOrderFromThankYouPage();
});

When("Codegen Buy Again returns to the IOMD app", async function () {
  await codegenBuyAgainPage.returnToIomdApp();
});

Then("Codegen Buy Again product can be ordered again from IOMD", async function () {
  await codegenBuyAgainPage.expectProductCanBeOrderedAgain();
});
