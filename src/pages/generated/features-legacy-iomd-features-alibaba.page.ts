import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAlibabaApplicationFeaturesLegacyIomdFeaturesAlibabaPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAlibabaApplicationFeaturesLegacyIomdFeaturesAlibabaPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userCloseThePopupInAlibabaWebsite(): Promise<void> {
    await this.executeLegacyStep("user close the popup in Alibaba website", {});
  }

  async userClicksMyaccountButtonByNameInTheWebsite(myaccount: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<MyAccount>\" button by name in the Website", { "myaccount": myaccount });
  }

  async userClicksSigninButtonByOnlyStaictextInTheWebsite(signin: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignIn>\" button by only Staictext in the Website", { "signin": signin });
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

  async userClicksClicklinkButtonByOnlyStaictextInTheWebsite(clicklink: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<clickLink>\" button by only Staictext in the Website", { "clicklink": clicklink });
  }

  async userClicksSignupButtonByOnlyStaictextInTheWebsite(signup: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignUp>\" button by only Staictext in the Website", { "signup": signup });
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
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthealibabaapplicationfeatureslegacyiomdfeaturesalibabapage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAlibabaApplicationFeaturesLegacyIomdFeaturesAlibabaPage();
