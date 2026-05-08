import { BasePage } from "../base.page";

export class I2iValidatesIomdPayFeatureForShopifyNodenextgenFeaturesLegacyIomdPayFeatureIomdPayWithNodeNextGenPage extends BasePage {
  constructor() {
    super("I2iValidatesIomdPayFeatureForShopifyNodenextgenFeaturesLegacyIomdPayFeatureIomdPayWithNodeNextGenPage");
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

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userClicksProductButtonByNameWithPindexInTheWebsite(product: string, pindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<product>\" button by name with \"<pindex>\" in the Website", { "product": product, "pindex": pindex });
  }

  async userClicksNodeButtonForPaymentInShopifySite(): Promise<void> {
    await this.executeLegacyStep("user clicks Node button for payment in Shopify site", {});
  }

  async userClicksSubmitButtonByOnlyNameInTheWebsite(submit: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<submit>\" button by only name in the Website", { "submit": submit });
  }

  async userVerifiesAutoFilledDataInPaymentPage(): Promise<void> {
    await this.executeLegacyStep("user verifies auto-filled data in Payment page", {});
  }

  async userClicksPaynowButtonByOnlyNameInTheWebsite(paynow: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<paynow>\" button by only name in the Website", { "paynow": paynow });
  }

  async userVerifiesDeeplinkContentAndClicksOnIt(): Promise<void> {
    await this.executeLegacyStep("user verifies deeplink content and clicks on it", {});
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

  async userClicksOnThePurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user clicks on the purchase tab", {});
  }

  async userVerifiesTheRecentRecordUnderPurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user verifies the recent record under purchase tab", {});
  }

  async userSkipsOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user skips onboarding flow", {});
  }

  async userClicksAddcartbtnButtonByOnlyNameInTheWebsite(addcartbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<addCartBtn>\" button by only name in the Website", { "addcartbtn": addcartbtn });
  }

  async userClicksCheckoutButtonByOnlyNameInTheWebsite(checkout: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<checkout>\" button by only name in the Website", { "checkout": checkout });
  }

  async userFillsDataInCheckoutPageForNodenextgen(): Promise<void> {
    await this.executeLegacyStep("user fills data in checkout page for NodenextGen", {});
  }

  async userContiunesOnboardingFlowFromDeeplink(): Promise<void> {
    await this.executeLegacyStep("user contiunes onboarding flow from deeplink", {});
  }

  async userClicksOnTheHomeTab(): Promise<void> {
    await this.executeLegacyStep("user clicks on the home tab", {});
  }

  async userClicksBuyagainButtonByNameWithPindexInTheWebsite(buyagain: string, pindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<buyagain>\" button by name with \"<pindex>\" in the Website", { "buyagain": buyagain, "pindex": pindex });
  }

  async userClicksNodeButtonForPaymentInShopifySiteFromCartPage(): Promise<void> {
    await this.executeLegacyStep("user clicks Node button for payment in Shopify site from Cart page", {});
  }

  async userFillsCardDataInCheckoutPageForBuyagain(): Promise<void> {
    await this.executeLegacyStep("user fills card data in checkout page for BuyAgain", {});
  }

  async userDeletesNodeApplication(): Promise<void> {
    await this.executeLegacyStep("user deletes node application", {});
  }

  async userVerifiesDeeplinkContentForTestfairyAndClicksOnIt(): Promise<void> {
    await this.executeLegacyStep("user verifies deeplink content for testfairy and clicks on it", {});
  }

  async userClicksIncreaseButtonByNameInTheWebsite(increase: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<increase>\" button by name in the Website", { "increase": increase });
  }

  async userClicksProduct2ButtonByNameWithSindexInTheWebsite(product2: string, sindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<product2>\" button by name with \"<sindex>\" in the Website", { "product2": product2, "sindex": sindex });
  }

  async userClicksViewcartButtonByNameWithPindexInTheWebsite(viewcart: string, pindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<viewCart>\" button by name with \"<pindex>\" in the Website", { "viewcart": viewcart, "pindex": pindex });
  }

  async userValidatesDataInsideIomdPayExtension(): Promise<void> {
    await this.executeLegacyStep("user validates data inside IOMD Pay Extension", {});
  }
}

export const i2ivalidatesiomdpayfeatureforshopifynodenextgenfeatureslegacyiomdpayfeatureiomdpaywithnodenextgenpage = new I2iValidatesIomdPayFeatureForShopifyNodenextgenFeaturesLegacyIomdPayFeatureIomdPayWithNodeNextGenPage();
