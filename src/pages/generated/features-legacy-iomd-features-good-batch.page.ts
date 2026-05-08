import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheGoodbatchApplicationFeaturesLegacyIomdFeaturesGoodBatchPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheGoodbatchApplicationFeaturesLegacyIomdFeaturesGoodBatchPage");
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
    await this.executeLegacyStep("user clicks \"<forgotPassword>\" button by only Staictext in the Website", { "forgotpassword": forgotpassword });
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

  async userEntersPasswordInTheSignupPageOfGoodbatch(): Promise<void> {
    await this.executeLegacyStep("user enters password in the signup page of GoodBatch", {});
  }

  async userClicksCreateButtonByOnlyNameInTheWebsite(create: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Create>\" button by only name in the Website", { "create": create });
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

  async userVerifiesRegisterFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Register from interaction tab", {});
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthegoodbatchapplicationfeatureslegacyiomdfeaturesgoodbatchpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheGoodbatchApplicationFeaturesLegacyIomdFeaturesGoodBatchPage();
