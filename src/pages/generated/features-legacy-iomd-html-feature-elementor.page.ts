import { BasePage } from "../base.page";

export class I2iValidatesAutofillFunctionalityInElementorWebsiteFeaturesLegacyIomdHtmlFeatureElementorPage extends BasePage {
  constructor() {
    super("I2iValidatesAutofillFunctionalityInElementorWebsiteFeaturesLegacyIomdHtmlFeatureElementorPage");
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

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksSigninButtonByOnlyNameInTheWebsite(signin: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignIn>\" button by only name in the Website", { "signin": signin });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
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

  async userClicksSignupButtonByOnlyNameInTheWebsite(signup: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Signup>\" button by only name in the Website", { "signup": signup });
  }

  async userClicksForgotpasswordButtonByOnlyNameInTheWebsite(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Forgotpassword>\" button by only name in the Website", { "forgotpassword": forgotpassword });
  }

  async userClicksCheckoutButtonByOnlyNameInTheWebsite(checkout: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<checkout>\" button by only name in the Website", { "checkout": checkout });
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
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

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
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
}

export const i2ivalidatesautofillfunctionalityinelementorwebsitefeatureslegacyiomdhtmlfeatureelementorpage = new I2iValidatesAutofillFunctionalityInElementorWebsiteFeaturesLegacyIomdHtmlFeatureElementorPage();
