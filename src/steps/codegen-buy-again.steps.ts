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

When("Codegen Buy Again opens any available Shopify product", async function () {
  await codegenBuyAgainPage.openAnyAvailableProduct();
});

When("Codegen Buy Again adds the product to cart and starts checkout", async function () {
  await codegenBuyAgainPage.addProductToCartAndStartCheckout();
});

When("Codegen Buy Again opens known available variant checkout", async function () {
  await codegenBuyAgainPage.openKnownAvailableVariantCheckout();
});

When("Codegen Buy Again enters invalid Shopify store password", async function () {
  await codegenBuyAgainPage.enterInvalidShopifyStorePassword();
});

When("Codegen Buy Again opens checkout with an empty cart", async function () {
  await codegenBuyAgainPage.openCheckoutWithEmptyCart();
});

When("Codegen Buy Again submits invalid checkout email", async function () {
  await codegenBuyAgainPage.submitInvalidCheckoutEmail();
});

When("Codegen Buy Again submits checkout without required address", async function () {
  await codegenBuyAgainPage.submitCheckoutWithoutRequiredAddress();
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

When("Codegen Buy Again submits payment without security code", async function () {
  await codegenBuyAgainPage.submitPaymentWithoutSecurityCode();
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

Then("Codegen Buy Again purchased product is shown in the node app", async function () {
  await codegenBuyAgainPage.expectPurchasedProductShownInNodeApp();
});

Then("Codegen Buy Again checkout contact form is visible", async function () {
  await codegenBuyAgainPage.expectCheckoutContactFormVisible();
});

Then("Codegen Buy Again checkout contact form is not visible", async function () {
  await codegenBuyAgainPage.expectCheckoutContactFormNotVisible();
});

Then("Codegen Buy Again node extension remains ready for Shopify", async function () {
  await codegenBuyAgainPage.expectNodeExtensionReadyForShopify();
});

Then("Codegen Buy Again Shopify store remains locked", async function () {
  await codegenBuyAgainPage.expectShopifyStoreLocked();
});

Then("Codegen Buy Again invalid email validation is shown", async function () {
  await codegenBuyAgainPage.expectInvalidEmailValidation();
});

Then("Codegen Buy Again required address validation is shown", async function () {
  await codegenBuyAgainPage.expectRequiredAddressValidation();
});

Then("Codegen Buy Again payment security code validation is shown", async function () {
  await codegenBuyAgainPage.expectPaymentSecurityCodeValidation();
});

Then("Codegen Buy Again node overlay is dismissed and Iomdnewgen21 can be selected", async function () {
  await codegenBuyAgainPage.expectNodeOverlayDismissedAndBusinessSelectable();
});

Then("Codegen Buy Again can use fallback product selectors in the node app", async function () {
  await codegenBuyAgainPage.expectFallbackProductSelectorsReady();
});
