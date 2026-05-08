import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheLaperlaApplicationFeaturesLegacyIomdFeaturesLaperlaPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheLaperlaApplicationFeaturesLegacyIomdFeaturesLaperlaPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteLoginurl(loginurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<loginurl>\"", { "loginurl": loginurl });
  }

  async userAcceptsTheAcceptAllCookiesButton(): Promise<void> {
    await this.executeLegacyStep("user accepts the accept all cookies button", {});
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

  async userLaunchesTheWebsiteReseturl(reseturl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<reseturl>\"", { "reseturl": reseturl });
  }

  async userClicksResetbtnButtonByNameWithIndexInTheWebsite(resetbtn: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<resetbtn>\" button by name with \"<index>\" in the Website", { "resetbtn": resetbtn, "index": index });
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userSwitchesBackToTheIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user switches back to the IOMD application", {});
  }

  async userVerifiesAndClicksOnTheBusinessTab(): Promise<void> {
    await this.executeLegacyStep("user verifies and clicks on the business tab", {});
  }

  async userClicksBusinessBusinessByOnlyNameInTheIomdTransactions(business: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<business>\" business by only name in the IOMD Transactions", { "business": business });
  }

  async userVerifiesOthersFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Others from interaction tab", {});
  }

  async userLaunchesTheWebsiteSigninurl(signinurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<signinurl>\"", { "signinurl": signinurl });
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
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

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberWithFormatAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthelaperlaapplicationfeatureslegacyiomdfeatureslaperlapage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheLaperlaApplicationFeaturesLegacyIomdFeaturesLaperlaPage();
