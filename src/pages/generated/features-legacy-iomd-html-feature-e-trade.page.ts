import { BasePage } from "../base.page";

export class I2iValidatesAutofillFunctionalityInEtradeWebsiteFeaturesLegacyIomdHtmlFeatureETradePage extends BasePage {
  constructor() {
    super("I2iValidatesAutofillFunctionalityInEtradeWebsiteFeaturesLegacyIomdHtmlFeatureETradePage");
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

  async userClicksForgotpasswordButtonByOnlyNameInTheWebsite(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Forgotpassword>\" button by only name in the Website", { "forgotpassword": forgotpassword });
  }

  async userClicksDocumentsigninButtonByOnlyNameInTheWebsite(documentsignin: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<documentsignin>\" button by only name in the Website", { "documentsignin": documentsignin });
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }
}

export const i2ivalidatesautofillfunctionalityinetradewebsitefeatureslegacyiomdhtmlfeatureetradepage = new I2iValidatesAutofillFunctionalityInEtradeWebsiteFeaturesLegacyIomdHtmlFeatureETradePage();
