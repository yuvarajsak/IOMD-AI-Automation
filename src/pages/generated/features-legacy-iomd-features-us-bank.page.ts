import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheUsbankApplicationFeaturesLegacyIomdFeaturesUsBankPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheUsbankApplicationFeaturesLegacyIomdFeaturesUsBankPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksLoginButtonByOnlyNameInTheWebsite(login: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<login>\" button by only name in the Website", { "login": login });
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
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheusbankapplicationfeatureslegacyiomdfeaturesusbankpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheUsbankApplicationFeaturesLegacyIomdFeaturesUsBankPage();
