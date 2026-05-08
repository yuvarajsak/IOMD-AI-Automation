import { BasePage } from "../base.page";

export class I2iValidatesAutofillFunctionalityInFarmersWebsiteFeaturesLegacyIomdHtmlFeatureFarmersPage extends BasePage {
  constructor() {
    super("I2iValidatesAutofillFunctionalityInFarmersWebsiteFeaturesLegacyIomdHtmlFeatureFarmersPage");
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

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalUsernameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Username are filled as expected for the Website", {});
  }

  async userClicksSignupButtonByOnlyNameInTheWebsite(signup: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Signup>\" button by only name in the Website", { "signup": signup });
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised FirstName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised LastName are filled as expected for the Website", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", {});
  }

  async userClicksForgotpasswordButtonByOnlyNameInTheWebsite(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Forgotpassword>\" button by only name in the Website", { "forgotpassword": forgotpassword });
  }

  async userVerifiesTheAutoFillDetailsForPersonalAddress1AreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Address1 are filled as expected for the website", {});
  }

  async userVerifiesTheAutoFillDetailsForCityAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for City are filled as expected for the Website", {});
  }

  async userClicksFindagentButtonByOnlyNameInTheWebsite(findagent: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<findagent>\" button by only name in the Website", { "findagent": findagent });
  }

  async userVerifiesTheAutoFillDetailsForStateAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for State are filled as expected for the Website", {});
  }

  async userClicksHomepageButtonByOnlyNameInTheWebsite(homepage: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<homepage>\" button by only name in the Website", { "homepage": homepage });
  }
}

export const i2ivalidatesautofillfunctionalityinfarmerswebsitefeatureslegacyiomdhtmlfeaturefarmerspage = new I2iValidatesAutofillFunctionalityInFarmersWebsiteFeaturesLegacyIomdHtmlFeatureFarmersPage();
