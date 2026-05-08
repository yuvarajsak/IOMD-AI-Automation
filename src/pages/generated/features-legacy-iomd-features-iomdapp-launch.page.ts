import { BasePage } from "../base.page";

export class I2i37LaunchingTheIomdAppplicationFeaturesLegacyIomdFeaturesIomdappLaunchPage extends BasePage {
  constructor() {
    super("I2i37LaunchingTheIomdAppplicationFeaturesLegacyIomdFeaturesIomdappLaunchPage");
  }

  async userLaunchesTheApplication(): Promise<void> {
    await this.executeLegacyStep("user launches the application", {});
  }

  async userEntersTheEmailidInTheInputbox(emailid: string): Promise<void> {
    await this.executeLegacyStep("user enters the \"<emailId>\" in the inputbox", { "emailid": emailid });
  }

  async userClicksOnTheFetchButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the fetch button", {});
  }

  async userVerifiesTheDisplayOfTheUserfullnameInTheList(userfullname: string): Promise<void> {
    await this.executeLegacyStep("user verifies the display of the \"<UserFullName>\" in the list", { "userfullname": userfullname });
  }

  async userVerifiesTheMailidAndPhonenumberAndAddressdetailsInThePage(mailid: string, phonenumber: string, addressdetails: string): Promise<void> {
    await this.executeLegacyStep("user verifies the \"<mailId>\" and \"<phoneNumber>\" and \"<addressDetails>\" in the page", { "mailid": mailid, "phonenumber": phonenumber, "addressdetails": addressdetails });
  }

  async userVeriifesTheDispayOfTheUsertypeInThePage(usertype: string): Promise<void> {
    await this.executeLegacyStep("user veriifes the dispay of the \"<userType>\" in the page", { "usertype": usertype });
  }

  async userVerifiesTheAnonomyousAnonomyousmailidAndAnonomyousphonenumberAndAnonomyousaddressdetailsInTheUserProfilePage(anonomyousmailid: string, anonomyousphonenumber: string, anonomyousaddressdetails: string): Promise<void> {
    await this.executeLegacyStep("user verifies the  anonomyous \"<anonomyousMailId>\" and \"<anonomyousPhoneNumber>\" and \"<anonomyousAddressDetails>\" in the user profile page", { "anonomyousmailid": anonomyousmailid, "anonomyousphonenumber": anonomyousphonenumber, "anonomyousaddressdetails": anonomyousaddressdetails });
  }

  async userVeriifesTheAnonomyousDispayOfTheAnonomyoususertypeInTheUserProfilePage(anonomyoususertype: string): Promise<void> {
    await this.executeLegacyStep("user veriifes the anonomyous dispay of the \"<anonomyousUserType>\" in the user profile page", { "anonomyoususertype": anonomyoususertype });
  }

  async userVerifiesTheDisplayOfTheNoProfileFoundMessageAfterEnteringInvalidDetailsInTheUserPage(): Promise<void> {
    await this.executeLegacyStep("User verifies the display of the no profile found message after entering invalid details in the user page", {});
  }

  async userVerifiesTheDisplayOfTheEnterValidEmailIdAlertMessagePopupAfterEnteringMailIdInIncorrectFormat(): Promise<void> {
    await this.executeLegacyStep("User verifies the display of the enter valid email id alert message popup after entering mail id in incorrect format", {});
  }
}

export const i2i37launchingtheiomdappplicationfeatureslegacyiomdfeaturesiomdapplaunchpage = new I2i37LaunchingTheIomdAppplicationFeaturesLegacyIomdFeaturesIomdappLaunchPage();
