import { BasePage } from "../base.page";

export class I2iValidatesAutofillFunctionalityInCurativelifestyleWebsiteFeaturesLegacyIomdHtmlFeatureCurativeLifeStylePage extends BasePage {
  constructor() {
    super("I2iValidatesAutofillFunctionalityInCurativelifestyleWebsiteFeaturesLegacyIomdHtmlFeatureCurativeLifeStylePage");
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksLoginwithpasswordButtonByOnlyNameInTheWebsite(loginwithpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<loginwithpassword>\" button by only name in the Website", { "loginwithpassword": loginwithpassword });
  }

  async userEntersThePasswordPasswordAndClicksOnTheEnterButtonToProceedFurther(password: string): Promise<void> {
    await this.executeLegacyStep("user enters the password \"<passWord>\" and clicks on the enter button to proceed further", { "password": password });
  }

  async userClicksCheckoutButtonByOnlyNameInTheWebsite(checkout: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<checkout>\" button by only name in the Website", { "checkout": checkout });
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

  async userSelectsTokenisedEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Email from Extension", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalAddress1AreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Address1 are filled as expected for the website", {});
  }

  async userVerifiesTheAutoFillDetailsForCountryAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for Country are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForCityAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for City are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForStateAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for State are filled as expected for the Website", {});
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber are filled as expected for the Website", {});
  }

  async userClicksPaymentButtonByOnlyNameInTheWebsite(payment: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<payment>\" button by only name in the Website", { "payment": payment });
  }

  async userSelectsCardDetails(): Promise<void> {
    await this.executeLegacyStep("user selects card details", {});
  }

  async userVerifiesTheAutoFillDetailsForCardNumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for card number are filled as expected for the Website", {});
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userNavigatesToTheSettingsApplicationAndEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user navigates to the settings application and enables the extension", {});
  }

  async userNavigatesToTheSafariApplication(): Promise<void> {
    await this.executeLegacyStep("user navigates to the safari application", {});
  }
}

export const i2ivalidatesautofillfunctionalityincurativelifestylewebsitefeatureslegacyiomdhtmlfeaturecurativelifestylepage = new I2iValidatesAutofillFunctionalityInCurativelifestyleWebsiteFeaturesLegacyIomdHtmlFeatureCurativeLifeStylePage();
