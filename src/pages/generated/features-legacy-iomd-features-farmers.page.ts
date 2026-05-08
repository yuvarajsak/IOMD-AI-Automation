import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFarmersApplicationFeaturesLegacyIomdFeaturesFarmersPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFarmersApplicationFeaturesLegacyIomdFeaturesFarmersPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
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

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
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

  async userLaunchesTheWebsiteUrl2(url2: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url2>\"", { "url2": url2 });
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthefarmersapplicationfeatureslegacyiomdfeaturesfarmerspage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheFarmersApplicationFeaturesLegacyIomdFeaturesFarmersPage();
