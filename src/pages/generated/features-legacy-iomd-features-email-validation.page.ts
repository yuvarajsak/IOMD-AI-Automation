import { BasePage } from "../base.page";

export class UserToValidateEmailTabAndMailSReceivedByTheUserFeaturesLegacyIomdFeaturesEmailValidationPage extends BasePage {
  constructor() {
    super("UserToValidateEmailTabAndMailSReceivedByTheUserFeaturesLegacyIomdFeaturesEmailValidationPage");
  }

  async userVerifiesTheClicksOnTheTransactionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies the clicks on the transaction tab", {});
  }

  async userVerifiesTheNotificationTab(notification: string): Promise<void> {
    await this.executeLegacyStep("user verifies the \"<Notification>\" tab", { "notification": notification });
  }

  async userClicksOnTheNotificationTab(notification: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the \"<Notification>\" tab", { "notification": notification });
  }

  async userVerifiesTheDisplayOfTheEmailCountText(): Promise<void> {
    await this.executeLegacyStep("user verifies the display of the email count text", {});
  }

  async userEntersTheEmailidInTheInputbox(emailid: string): Promise<void> {
    await this.executeLegacyStep("user enters the \"<emailId>\" in the inputbox", { "emailid": emailid });
  }

  async userClicksOnTheFetchButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the fetch button", {});
  }

  async userNavigatesToTheSettingsApplicationAndEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user navigates to the settings application and enables the extension", {});
  }

  async userNavigatesToTheSafariApplication(): Promise<void> {
    await this.executeLegacyStep("user navigates to the safari application", {});
  }

  async userLaunchesTheCoravinWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the coravin website \"<url>\"", { "url": url });
  }

  async userClicksOnTheSigninorsignupbuttonInTheCoravinWebsite(): Promise<void> {
    await this.executeLegacyStep("user clicks on the signInOrSignUpButton in the coravin website", {});
  }

  async userClicksOnTheSignInButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the sign in button", {});
  }

  async userClicksOnTheForgotPasswordLinkForgotpassword(forgotpassword: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the forgot password link \"<forgotPassword>\"", { "forgotpassword": forgotpassword });
  }

  async userEntersTheEmailidInTheInputboxAndClicksOnTheSubmitButton(emailid: string): Promise<void> {
    await this.executeLegacyStep("user enters the \"<emailId>\" in the inputbox and clicks on the submit button", { "emailid": emailid });
  }

  async userSwitchesBackToTheIomdApplication(): Promise<void> {
    await this.executeLegacyStep("user switches back to the IOMD application", {});
  }

  async userVerifiesTheDisplayOfTheForgotEmail(): Promise<void> {
    await this.executeLegacyStep("user verifies the display of the forgot email", {});
  }

  async userClicksTheMailAndVerifiesTheDetailsPresentInsideTheTab(): Promise<void> {
    await this.executeLegacyStep("user clicks the mail and verifies the details present inside the tab", {});
  }
}

export const usertovalidateemailtabandmailsreceivedbytheuserfeatureslegacyiomdfeaturesemailvalidationpage = new UserToValidateEmailTabAndMailSReceivedByTheUserFeaturesLegacyIomdFeaturesEmailValidationPage();
