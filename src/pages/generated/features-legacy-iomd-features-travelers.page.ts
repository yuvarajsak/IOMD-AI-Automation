import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheTravelersApplicationFeaturesLegacyIomdFeaturesTravelersPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheTravelersApplicationFeaturesLegacyIomdFeaturesTravelersPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteHomeurl(homeurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<homeurl>\"", { "homeurl": homeurl });
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

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userSelectsTokenisedEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Email from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
  }

  async userClicksForgetbuttonButtonByNameWithIndexInTheWebsite(forgetbutton: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Forgetbutton>\" button by name with \"<index>\" in the Website", { "forgetbutton": forgetbutton, "index": index });
  }

  async userClicksForgotpasswordButtonByNameWithIndexInTheWebsite(forgotpassword: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotPassword>\" button by name with \"<index>\" in the Website", { "forgotpassword": forgotpassword, "index": index });
  }

  async userClicksCancelButtonByNameWithIndexInTheWebsite(cancel: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<cancel>\" button by name with \"<index>\" in the Website", { "cancel": cancel, "index": index });
  }

  async userClicksForgotuidButtonByNameWithIndexInTheWebsite(forgotuid: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotUid>\" button by name with \"<index>\" in the Website", { "forgotuid": forgotuid, "index": index });
  }

  async userClicksChoosebuttonButtonByOnlyStaictextInTheWebsite(choosebutton: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Choosebutton>\" button by only Staictext in the Website", { "choosebutton": choosebutton });
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

  async userClicksCreateButtonByOnlyNameInTheWebsite(create: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Create>\" button by only name in the Website", { "create": create });
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
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthetravelersapplicationfeatureslegacyiomdfeaturestravelerspage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheTravelersApplicationFeaturesLegacyIomdFeaturesTravelersPage();
