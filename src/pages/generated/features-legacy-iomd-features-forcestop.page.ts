import { BasePage } from "../base.page";

export class ToValidateTheUserIsAbleToTheAddTheDetaiilsIfUserIsForceStopingTheApplicationFeaturesLegacyIomdFeaturesForcestopPage extends BasePage {
  constructor() {
    super("ToValidateTheUserIsAbleToTheAddTheDetaiilsIfUserIsForceStopingTheApplicationFeaturesLegacyIomdFeaturesForcestopPage");
  }

  async userEntersTheEmailidInTheInputbox(emailid: string): Promise<void> {
    await this.executeLegacyStep("user enters the \"<emailId>\" in the inputbox", { "emailid": emailid });
  }

  async userClicksOnTheFetchButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the fetch button", {});
  }

  async userForceStopsTheApplication(): Promise<void> {
    await this.executeLegacyStep("user force stops the application", {});
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

  async userClicksCreateAccountButton(): Promise<void> {
    await this.executeLegacyStep("user clicks create account button", {});
  }

  async userEnablesTheExtensionAndVerifiesTheExpectedDetailsArePresentForThePage(): Promise<void> {
    await this.executeLegacyStep("user enables the extension and verifies the expected details are present for the page", {});
  }

  async userSelectsTheValueFromTheExtensionAndClicksOnTheFillButton(): Promise<void> {
    await this.executeLegacyStep("user selects the value from the extension and clicks on the fill button", {});
  }

  async userVerifiesTheDetailsAreGettingEnteredAsExpectedInTheFieldBox(): Promise<void> {
    await this.executeLegacyStep("user verifies the details are getting entered as expected in the field box", {});
  }
}

export const tovalidatetheuserisabletotheaddthedetaiilsifuserisforcestopingtheapplicationfeatureslegacyiomdfeaturesforcestoppage = new ToValidateTheUserIsAbleToTheAddTheDetaiilsIfUserIsForceStopingTheApplicationFeaturesLegacyIomdFeaturesForcestopPage();
