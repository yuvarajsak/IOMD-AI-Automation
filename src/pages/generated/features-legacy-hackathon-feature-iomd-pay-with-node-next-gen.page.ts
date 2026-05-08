import { BasePage } from "../base.page";

export class I2iValidatesIomdPayFeatureForShopifyNodenextgenFeaturesLegacyHackathonFeatureIomdPayWithNodeNextGenPage extends BasePage {
  constructor() {
    super("I2iValidatesIomdPayFeatureForShopifyNodenextgenFeaturesLegacyHackathonFeatureIomdPayWithNodeNextGenPage");
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userLaunchesTheWebsiteIomdpayurl(iomdpayurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<iomdpayurl>\"", { "iomdpayurl": iomdpayurl });
  }

  async userEntersThePasswordAndClicksOnTheEnterButtonToProceedFurther(): Promise<void> {
    await this.executeLegacyStep("user enters the password and clicks on the enter button to proceed further", {});
  }

  async userClicksContinueButtonByOnlyNameInTheWebsite(continueValue: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continue>\" button by only name in the Website", { "continueValue": continueValue });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userClicksProductButtonByNameWithPindexInTheWebsite(product: string, pindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<product>\" button by name with \"<pindex>\" in the Website", { "product": product, "pindex": pindex });
  }

  async userClicksNodeButtonForPaymentInShopifySite(): Promise<void> {
    await this.executeLegacyStep("user clicks Node button for payment in Shopify site", {});
  }

  async userValidatesDataInsideIomdPayExtension(): Promise<void> {
    await this.executeLegacyStep("user validates data inside IOMD Pay Extension", {});
  }

  async userClicksRevieworderButtonByOnlyNameInTheWebsite(revieworder: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<reviewOrder>\" button by only name in the Website", { "revieworder": revieworder });
  }

  async userClicksShippingbtnButtonByNameWithSindexInTheWebsite(shippingbtn: string, sindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<shippingBtn>\" button by name with \"<sindex>\" in the Website", { "shippingbtn": shippingbtn, "sindex": sindex });
  }

  async userClicksSubmitButtonByOnlyNameInTheWebsite(submit: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<submit>\" button by only name in the Website", { "submit": submit });
  }

  async userVerifiesAutoFilledCardDataInPaymentPage(): Promise<void> {
    await this.executeLegacyStep("user verifies auto-filled card data in Payment page", {});
  }

  async userVerifiesTheAmountWithShippingCostForShopify(): Promise<void> {
    await this.executeLegacyStep("user verifies the amount with shipping cost for Shopify", {});
  }

  async userClicksPlaceorderButtonByOnlyNameInTheWebsite(placeorder: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<placeOrder>\" button by only name in the Website", { "placeorder": placeorder });
  }

  async userSwitchesBackToTheIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user switches back to the IOMD application", {});
  }

  async userVerifiesAndClicksOnTheBusinessTab(): Promise<void> {
    await this.executeLegacyStep("user verifies and clicks on the business tab", {});
  }

  async userClicksBusinessBusinessByOnlyNameInTheIomdTransactions(business: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<business>\" business by only name in the IOMD Transactions", { "business": business });
  }

  async userVerifiesCheckoutFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Checkout from interaction tab", {});
  }

  async userClicksPurchaseButtonByOnlyStaictextInTheWebsite(purchase: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<purchase>\" button by only Staictext in the Website", { "purchase": purchase });
  }

  async userVerifiesTheRecentRecordUnderPurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user verifies the recent record under purchase tab", {});
  }

  async userSkipsOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user skips onboarding flow", {});
  }

  async userClicksBuynowButtonByOnlyNameInTheWebsite(buynow: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Buynow>\" button by only name in the Website", { "buynow": buynow });
  }

  async userFillsDataInCheckoutPageForNodenextgen(): Promise<void> {
    await this.executeLegacyStep("user fills data in checkout page for NodenextGen", {});
  }

  async userVerifiesDeeplinkContentAndClicksOnIt(): Promise<void> {
    await this.executeLegacyStep("user verifies deeplink content and clicks on it", {});
  }

  async userContiunesOnboardingFlowFromDeeplink(): Promise<void> {
    await this.executeLegacyStep("user contiunes onboarding flow from deeplink", {});
  }

  async userClicksOnTheHomeTab(): Promise<void> {
    await this.executeLegacyStep("user clicks on the home tab", {});
  }

  async userVerifiesTheOfferOfferselectedForBuyAgainOption(offerselected: string): Promise<void> {
    await this.executeLegacyStep("user verifies the offer \"<offerselected>\" for buy again option", { "offerselected": offerselected });
  }

  async userDeletesNodeApplication(): Promise<void> {
    await this.executeLegacyStep("user deletes node application", {});
  }

  async userClicksIncreaseButtonByNameInTheWebsite(increase: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<increase>\" button by name in the Website", { "increase": increase });
  }

  async userClicksAddcartbtnButtonByOnlyNameInTheWebsite(addcartbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<addCartBtn>\" button by only name in the Website", { "addcartbtn": addcartbtn });
  }

  async userClicksProduct2ButtonByNameWithSindexInTheWebsite(product2: string, sindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<product2>\" button by name with \"<sindex>\" in the Website", { "product2": product2, "sindex": sindex });
  }

  async userClicksViewcartButtonByNameWithPindexInTheWebsite(viewcart: string, pindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<viewCart>\" button by name with \"<pindex>\" in the Website", { "viewcart": viewcart, "pindex": pindex });
  }

  async userClicksNodeButtonForPaymentInShopifySiteFromCartPage(): Promise<void> {
    await this.executeLegacyStep("user clicks Node button for payment in Shopify site from Cart page", {});
  }

  async userVerifiesAndClicksOnTheMessageTab(): Promise<void> {
    await this.executeLegacyStep("user verifies and clicks on the message tab", {});
  }

  async userClicksBuyagainButtonByNameWithPindexInTheWebsite(buyagain: string, pindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<buyagain>\" button by name with \"<pindex>\" in the Website", { "buyagain": buyagain, "pindex": pindex });
  }

  async userVerifiesTheAmountWithShippingCostForShopifyWithDiscount(): Promise<void> {
    await this.executeLegacyStep("user verifies the amount with shipping cost for Shopify with discount", {});
  }
}

export const i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyhackathonfeatureiomdpaywithnodenextgenpage = new I2iValidatesIomdPayFeatureForShopifyNodenextgenFeaturesLegacyHackathonFeatureIomdPayWithNodeNextGenPage();
