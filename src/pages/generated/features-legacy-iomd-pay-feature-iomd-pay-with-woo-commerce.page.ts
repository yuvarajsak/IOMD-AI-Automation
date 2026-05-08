import { BasePage } from "../base.page";

export class I2iValidatesIomdPayFeatureForWoocommerceFeaturesLegacyIomdPayFeatureIomdPayWithWooCommercePage extends BasePage {
  constructor() {
    super("I2iValidatesIomdPayFeatureForWoocommerceFeaturesLegacyIomdPayFeatureIomdPayWithWooCommercePage");
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userLaunchesTheWebsiteIomdpayurl(iomdpayurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<iomdpayurl>\"", { "iomdpayurl": iomdpayurl });
  }

  async userClicksClothingButtonByNameInTheWebsite(clothing: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<clothing>\" button by name in the Website", { "clothing": clothing });
  }

  async userClicksAddcartbtnButtonByNameWithIndexInTheWebsite(addcartbtn: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<addCartBtn>\" button by name with \"<index>\" in the Website", { "addcartbtn": addcartbtn, "index": index });
  }

  async userClicksNodeButtonForPaymentInWoocommerceSite(): Promise<void> {
    await this.executeLegacyStep("user clicks Node button for payment in Woocommerce site", {});
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

  async userVerifiesTheAmountWithShippingCostForWoocommerce(): Promise<void> {
    await this.executeLegacyStep("user verifies the amount with shipping cost for Woocommerce", {});
  }

  async userClicksPlaceorderButtonByOnlyNameInTheWebsite(placeorder: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<placeOrder>\" button by only name in the Website", { "placeorder": placeorder });
  }

  async userSwitchesBackToTheIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user switches back to the IOMD application", {});
  }

  async userVerifiesAndClicksOnTheMessageTab(): Promise<void> {
    await this.executeLegacyStep("user verifies and clicks on the message tab", {});
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

  async userClicksContinueshoppingButtonByOnlyStaictextInTheWebsite(continueshopping: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<continueShopping>\" button by only Staictext in the Website", { "continueshopping": continueshopping });
  }

  async userClicksAddcartbtnButtonByNameWithSindexInTheWebsite(addcartbtn: string, sindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<addCartBtn>\" button by name with \"<sindex>\" in the Website", { "addcartbtn": addcartbtn, "sindex": sindex });
  }

  async userClicksShippingbtnButtonByNameWithIndexInTheWebsite(shippingbtn: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<shippingBtn>\" button by name with \"<index>\" in the Website", { "shippingbtn": shippingbtn, "index": index });
  }

  async userVerifiesTheOfferOfferselectedForBuyAgainOption(offerselected: string): Promise<void> {
    await this.executeLegacyStep("user verifies the offer \"<offerselected>\" for buy again option", { "offerselected": offerselected });
  }

  async userClicksBuyagainButtonByNameWithIndexInTheWebsite(buyagain: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<buyagain>\" button by name with \"<index>\" in the Website", { "buyagain": buyagain, "index": index });
  }

  async userVerifiesTheAmountWithShippingCostForWoocommerceWithDiscount(): Promise<void> {
    await this.executeLegacyStep("user verifies the amount with shipping cost for Woocommerce with discount", {});
  }
}

export const i2ivalidatesiomdpayfeatureforwoocommercefeatureslegacyiomdpayfeatureiomdpaywithwoocommercepage = new I2iValidatesIomdPayFeatureForWoocommerceFeaturesLegacyIomdPayFeatureIomdPayWithWooCommercePage();
