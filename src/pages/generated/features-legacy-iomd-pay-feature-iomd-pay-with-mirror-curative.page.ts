import { BasePage } from "../base.page";

export class I2iValidatesIomdPayFeatureForShopifyFeaturesLegacyIomdPayFeatureIomdPayWithMirrorCurativePage extends BasePage {
  constructor() {
    super("I2iValidatesIomdPayFeatureForShopifyFeaturesLegacyIomdPayFeatureIomdPayWithMirrorCurativePage");
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userLaunchesTheWebsiteIomdpayurl(iomdpayurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<iomdpayurl>\"", { "iomdpayurl": iomdpayurl });
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

  async userClicksSubmitButtonByOnlyNameInTheWebsite(submit: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<submit>\" button by only name in the Website", { "submit": submit });
  }

  async userVerifiesAutoFilledDataInPaymentPage(): Promise<void> {
    await this.executeLegacyStep("user verifies auto-filled data in Payment page", {});
  }

  async userClicksPaynowButtonByOnlyNameInTheWebsite(paynow: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<paynow>\" button by only name in the Website", { "paynow": paynow });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
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

  async userClicksPurchaseButtonByOnlyStaictextInTheWebsite(purchase: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<purchase>\" button by only Staictext in the Website", { "purchase": purchase });
  }

  async userVerifiesTheRecentRecordUnderPurchaseTab(): Promise<void> {
    await this.executeLegacyStep("user verifies the recent record under purchase tab", {});
  }

  async userSkipsOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user skips onboarding flow", {});
  }

  async userEntersThePasswordAndClicksOnTheEnterButtonToProceedFurther(): Promise<void> {
    await this.executeLegacyStep("user enters the password and clicks on the enter button to proceed further", {});
  }

  async userClicksBuynowButtonByOnlyNameInTheWebsite(buynow: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Buynow>\" button by only name in the Website", { "buynow": buynow });
  }

  async userFillsDataInCheckoutPageForNodenextgen(): Promise<void> {
    await this.executeLegacyStep("user fills data in checkout page for NodenextGen", {});
  }

  async userVerifiesDeeplinkContentForTestfairyAndClicksOnIt(): Promise<void> {
    await this.executeLegacyStep("user verifies deeplink content for testfairy and clicks on it", {});
  }

  async userContiunesOnboardingFlowFromDeeplink(): Promise<void> {
    await this.executeLegacyStep("user contiunes onboarding flow from deeplink", {});
  }

  async userClicksOnTheHomeTab(): Promise<void> {
    await this.executeLegacyStep("user clicks on the home tab", {});
  }
}

export const i2ivalidatesiomdpayfeatureforshopifyfeatureslegacyiomdpayfeatureiomdpaywithmirrorcurativepage = new I2iValidatesIomdPayFeatureForShopifyFeaturesLegacyIomdPayFeatureIomdPayWithMirrorCurativePage();
