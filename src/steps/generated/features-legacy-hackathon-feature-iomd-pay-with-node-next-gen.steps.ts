import { Given, Then, When } from "@wdio/cucumber-framework";
import { i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage } from "../../pages/generated/features-legacy-hackathon-feature-iomd-pay-with-node-next-gen.page";

When("user completes onboarding flow with card data", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userCompletesOnboardingFlowWithCardData();
});
When("user launches the website {string}", async function (iomdpayurl: string) {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userLaunchesTheWebsiteIomdpayurl(iomdpayurl);
});
Then("user enters the password and clicks on the enter button to proceed further", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userEntersThePasswordAndClicksOnTheEnterButtonToProceedFurther();
});
Then("user clicks {string} button by only name in the Website", async function (continueValue: string) {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userClicksContinueButtonByOnlyNameInTheWebsite(continueValue);
});
Then("user accepts the popup", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userAcceptsThePopup();
});
Then("user clicks {string} button by name with {string} in the Website", async function (product: string, pindex: string) {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userClicksProductButtonByNameWithPindexInTheWebsite(product, pindex);
});
Then("user clicks Node button for payment in Shopify site", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userClicksNodeButtonForPaymentInShopifySite();
});
When("user validates data inside IOMD Pay Extension", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userValidatesDataInsideIomdPayExtension();
});
When("user verifies auto-filled card data in Payment page", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userVerifiesAutoFilledCardDataInPaymentPage();
});
When("user verifies the amount with shipping cost for Shopify", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userVerifiesTheAmountWithShippingCostForShopify();
});
When("user switches back to the IOMD application", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userSwitchesBackToTheIomdApplication();
});
When("user verifies and clicks on the business tab", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userVerifiesAndClicksOnTheBusinessTab();
});
When("user clicks {string} business by only name in the IOMD Transactions", async function (business: string) {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userClicksBusinessBusinessByOnlyNameInTheIomdTransactions(business);
});
When("user verifies Checkout from interaction tab", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userVerifiesCheckoutFromInteractionTab();
});
When("user clicks {string} button by only Staictext in the Website", async function (purchase: string) {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userClicksPurchaseButtonByOnlyStaictextInTheWebsite(purchase);
});
When("user verifies the recent record under purchase tab", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userVerifiesTheRecentRecordUnderPurchaseTab();
});
When("user skips onboarding flow", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userSkipsOnboardingFlow();
});
Then("user fills data in checkout page for NodenextGen", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userFillsDataInCheckoutPageForNodenextgen();
});
Then("user verifies deeplink content and clicks on it", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userVerifiesDeeplinkContentAndClicksOnIt();
});
When("user contiunes onboarding flow from deeplink", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userContiunesOnboardingFlowFromDeeplink();
});
Then("user clicks on the home tab", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userClicksOnTheHomeTab();
});
Then("user verifies the offer {string} for buy again option", async function (offerselected: string) {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userVerifiesTheOfferOfferselectedForBuyAgainOption(offerselected);
});
When("user deletes node application", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userDeletesNodeApplication();
});
Then("user clicks {string} button by name in the Website", async function (increase: string) {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userClicksIncreaseButtonByNameInTheWebsite(increase);
});
When("user clicks Node button for payment in Shopify site from Cart page", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userClicksNodeButtonForPaymentInShopifySiteFromCartPage();
});
When("user verifies and clicks on the message tab", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userVerifiesAndClicksOnTheMessageTab();
});
When("user verifies the amount with shipping cost for Shopify with discount", async function () {
  await i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage.userVerifiesTheAmountWithShippingCostForShopifyWithDiscount();
});

