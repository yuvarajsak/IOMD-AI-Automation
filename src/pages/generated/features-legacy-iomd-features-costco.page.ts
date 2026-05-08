import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheCostcoApplicationFeaturesLegacyIomdFeaturesCostcoPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheCostcoApplicationFeaturesLegacyIomdFeaturesCostcoPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksAccountButtonByOnlyStaictextInTheWebsite(account: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<account>\" button by only Staictext in the Website", { "account": account });
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

  async userClicksForgotpasswordButtonByOnlyNameInTheWebsite(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotPassword>\" button by only name in the Website", { "forgotpassword": forgotpassword });
  }

  async userClicksSendButtonByOnlyNameInTheWebsite(send: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<send>\" button by only name in the Website", { "send": send });
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

  async userClicksCreateaccountButtonByOnlyStaictextInTheWebsite(createaccount: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<createaccount>\" button by only Staictext in the Website", { "createaccount": createaccount });
  }
}

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyinthecostcoapplicationfeatureslegacyiomdfeaturescostcopage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheCostcoApplicationFeaturesLegacyIomdFeaturesCostcoPage();
