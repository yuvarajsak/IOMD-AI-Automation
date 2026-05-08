import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheKaiserfoundationApplicationFeaturesLegacyIomdFeaturesKaiserFoundationPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheKaiserfoundationApplicationFeaturesLegacyIomdFeaturesKaiserFoundationPage");
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

  async userClicksForgotpasswordbuttonButtonByOnlyStaictextInTheWebsite(forgotpasswordbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotPasswordButton>\" button by only Staictext in the Website", { "forgotpasswordbutton": forgotpasswordbutton });
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForPersonalLastnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal LastName are filled as expected for the Website", {});
  }

  async userClicksForgotuseridbuttonButtonByOnlyStaictextInTheWebsite(forgotuseridbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotUserIDButton>\" button by only Staictext in the Website", { "forgotuseridbutton": forgotuseridbutton });
  }

  async userClicksRegisterButtonByOnlyStaictextInTheWebsite(register: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Register>\" button by only Staictext in the Website", { "register": register });
  }

  async userClicksCreatemyaccountbuttonButtonByOnlyStaictextInTheWebsite(createmyaccountbutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<CreateMyAccountButton>\" button by only Staictext in the Website", { "createmyaccountbutton": createmyaccountbutton });
  }

  async userVerifiesTheAutoFillDetailsForPersonalFirstnameAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal FirstName are filled as expected for the Website", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthekaiserfoundationapplicationfeatureslegacyiomdfeatureskaiserfoundationpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheKaiserfoundationApplicationFeaturesLegacyIomdFeaturesKaiserFoundationPage();
