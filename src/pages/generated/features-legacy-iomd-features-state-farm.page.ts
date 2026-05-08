import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheStatefarmApplicationFeaturesLegacyIomdFeaturesStateFarmPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheStatefarmApplicationFeaturesLegacyIomdFeaturesStateFarmPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksMyaccountButtonByOnlyNameInTheWebsite(myaccount: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<MyAccount>\" button by only name in the Website", { "myaccount": myaccount });
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

  async userClicksMyaccountButtonByNameInTheWebsite(myaccount: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<MyAccount>\" button by name in the Website", { "myaccount": myaccount });
  }

  async userClicksForgotpasswordButtonByOnlyStaictextInTheWebsite(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotPassword>\" button by only Staictext in the Website", { "forgotpassword": forgotpassword });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
  }

  async userClicksSignupButtonByOnlyStaictextInTheWebsite(signup: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Signup>\" button by only Staictext in the Website", { "signup": signup });
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthestatefarmapplicationfeatureslegacyiomdfeaturesstatefarmpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheStatefarmApplicationFeaturesLegacyIomdFeaturesStateFarmPage();
