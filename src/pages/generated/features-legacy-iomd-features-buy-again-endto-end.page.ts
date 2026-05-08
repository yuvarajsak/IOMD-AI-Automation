import { BasePage } from "../base.page";

export class ToValidateTheBuyAgainDataIsGettingDisplayedAsExpectedFeaturesLegacyIomdFeaturesBuyAgainEndtoEndPage extends BasePage {
  constructor() {
    super("ToValidateTheBuyAgainDataIsGettingDisplayedAsExpectedFeaturesLegacyIomdFeaturesBuyAgainEndtoEndPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userEntersTheStorePassword(): Promise<void> {
    await this.executeLegacyStep("user enters the store password", {});
  }

  async userEnablesNodeExtension(): Promise<void> {
    await this.executeLegacyStep("user enables node extension", {});
  }

  async userSelectsFirstProductAndProceedsToCheckout(): Promise<void> {
    await this.executeLegacyStep("user selects first product and proceeds to checkout", {});
  }

  async userEntersCheckoutContactDetailsAndSelectsSuggestedAddress(): Promise<void> {
    await this.executeLegacyStep("user enters checkout contact details and selects suggested address", {});
  }

  async userEntersCardDetailsAndClosesKeyboard(): Promise<void> {
    await this.executeLegacyStep("user enters card details and closes keyboard", {});
  }

  async userClicksPayNowButton(): Promise<void> {
    await this.executeLegacyStep("user clicks Pay Now button", {});
  }

  async userClicksOnTrackMyOrderButtonFromThankYouPage(): Promise<void> {
    await this.executeLegacyStep("user clicks on track my order button from thank you page", {});
  }

  async userSwitchesBackToTheIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user switches back to the IOMD application", {});
  }

  async userSelectsFirstBusinessAndClicksBuyAgain(): Promise<void> {
    await this.executeLegacyStep("user selects first business and clicks buy again", {});
  }
}

export const tovalidatethebuyagaindataisgettingdisplayedasexpectedfeatureslegacyiomdfeaturesbuyagainendtoendpage = new ToValidateTheBuyAgainDataIsGettingDisplayedAsExpectedFeaturesLegacyIomdFeaturesBuyAgainEndtoEndPage();
