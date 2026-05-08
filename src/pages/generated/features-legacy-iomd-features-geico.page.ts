import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheGeicoApplicationFeaturesLegacyIomdFeaturesGeicoPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheGeicoApplicationFeaturesLegacyIomdFeaturesGeicoPage");
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

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalZipcodeAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Zipcode are filled as expected for the Website", {});
  }

  async userLaunchesTheWebsiteSignupurl(signupurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<signupurl>\"", { "signupurl": signupurl });
  }

  async userSelectsTokenisedEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Email from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }

  async userLaunchesTheWebsiteForgeturl(forgeturl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<forgeturl>\"", { "forgeturl": forgeturl });
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthegeicoapplicationfeatureslegacyiomdfeaturesgeicopage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheGeicoApplicationFeaturesLegacyIomdFeaturesGeicoPage();
