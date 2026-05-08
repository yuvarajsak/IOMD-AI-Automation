import { BasePage } from "../base.page";

export class I2iValidatesIomdPayFeatureAndCheecksTheOrderPlacedDataInMagentoFeaturesLegacyIomdHtmlFeatureIomdHtmlpageValidationPage extends BasePage {
  constructor() {
    super("I2iValidatesIomdPayFeatureAndCheecksTheOrderPlacedDataInMagentoFeaturesLegacyIomdHtmlFeatureIomdHtmlpageValidationPage");
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksNextinsuranceButtonByOnlyNameInTheWebsite(nextinsurance: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<NextInsurance>\" button by only name in the Website", { "nextinsurance": nextinsurance });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalAddress1AreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Address1 are filled as expected for the website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber are filled as expected for the Website", {});
  }

  async userClicksCommerceButtonByOnlyNameInTheWebsite(commerce: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Commerce>\" button by only name in the Website", { "commerce": commerce });
  }

  async userVerifiesTheAutoFillDetailsForPersonalUsernameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Username are filled as expected for the Website", {});
  }

  async userClicksFourseasonsButtonByOnlyNameInTheWebsite(fourseasons: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<FourSeasons>\" button by only name in the Website", { "fourseasons": fourseasons });
  }

  async userSelectsTokenisedEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Email from Extension", {});
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForCardNumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for card number are filled as expected for the Website", {});
  }
}

export const i2ivalidatesiomdpayfeatureandcheeckstheorderplaceddatainmagentofeatureslegacyiomdhtmlfeatureiomdhtmlpagevalidationpage = new I2iValidatesIomdPayFeatureAndCheecksTheOrderPlacedDataInMagentoFeaturesLegacyIomdHtmlFeatureIomdHtmlpageValidationPage();
