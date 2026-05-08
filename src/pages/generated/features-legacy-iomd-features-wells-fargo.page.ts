import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheWellsfargoApplicationFeaturesLegacyIomdFeaturesWellsFargoPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheWellsfargoApplicationFeaturesLegacyIomdFeaturesWellsFargoPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksSigninLinkByValueInTheWebsite(signin: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignIn>\" link by value in the Website", { "signin": signin });
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

  async userClicksUsernameButtonByOnlyNameInTheWebsite(username: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<username>\" button by only name in the Website", { "username": username });
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthewellsfargoapplicationfeatureslegacyiomdfeatureswellsfargopage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheWellsfargoApplicationFeaturesLegacyIomdFeaturesWellsFargoPage();
