import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheUnitedhealthApplicationFeaturesLegacyIomdFeaturesUnitedHealthPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheUnitedhealthApplicationFeaturesLegacyIomdFeaturesUnitedHealthPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksSigninButtonByOnlyNameInTheWebsite(signin: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignIn>\" button by only name in the Website", { "signin": signin });
  }

  async userClicksPlanbtnButtonByOnlyNameInTheWebsite(planbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<planbtn>\" button by only name in the Website", { "planbtn": planbtn });
  }

  async userClicksSigninButtonByNameInTheWebsite(signin: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignIn>\" button by name in the Website", { "signin": signin });
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

  async userClicksForgotpasswordButtonByOnlyStaictextInTheWebsite(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotPassword>\" button by only Staictext in the Website", { "forgotpassword": forgotpassword });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
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

  async userClicksRegisterButtonByNameInTheWebsite(register: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Register>\" button by name in the Website", { "register": register });
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheunitedhealthapplicationfeatureslegacyiomdfeaturesunitedhealthpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheUnitedhealthApplicationFeaturesLegacyIomdFeaturesUnitedHealthPage();
