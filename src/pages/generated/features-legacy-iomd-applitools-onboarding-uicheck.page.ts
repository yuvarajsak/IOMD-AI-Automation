import { BasePage } from "../base.page";

export class ToValidateTheUiWithApplitoolsFeaturesLegacyIomdApplitoolsOnboardingUicheckPage extends BasePage {
  constructor() {
    super("ToValidateTheUiWithApplitoolsFeaturesLegacyIomdApplitoolsOnboardingUicheckPage");
  }

  async iInitiateApplitoolsEyesToProceedValidationForTestcase(testcase: string): Promise<void> {
    await this.executeLegacyStep("I initiate applitools eyes to proceed validation for \"<testcase>\"", { "testcase": testcase });
  }

  async userValidatesAllowPopupScreenOnLaunchingTheApplication(): Promise<void> {
    await this.executeLegacyStep("user validates Allow popup screen on launching the application", {});
  }

  async userValidatesSplashScreenOfTheApplication(): Promise<void> {
    await this.executeLegacyStep("user validates splash screen of the application", {});
  }

  async userValidatesCheckboxScreen(): Promise<void> {
    await this.executeLegacyStep("user validates checkbox screen", {});
  }

  async userValidatesBeginsetupScreen(): Promise<void> {
    await this.executeLegacyStep("user validates BeginSetup screen", {});
  }

  async userValidatesSetupStep1Screen(): Promise<void> {
    await this.executeLegacyStep("user validates Setup step1 screen", {});
  }

  async userValidatesTellYourFriendsScreen(): Promise<void> {
    await this.executeLegacyStep("user validates tell your friends screen", {});
  }

  async userValidatesSetupStep2Screen(): Promise<void> {
    await this.executeLegacyStep("user validates Setup step2 screen", {});
  }

  async userEnablesExtensionAndSwitchBackToTheApp(): Promise<void> {
    await this.executeLegacyStep("user enables extension and switch back to the app", {});
  }

  async userValidatesEnablesExtensionScreen(): Promise<void> {
    await this.executeLegacyStep("user validates Enables extension screen", {});
  }

  async userValidatesAnimatedCardsInTheHomepage(): Promise<void> {
    await this.executeLegacyStep("user validates animated cards in the homepage", {});
  }

  async userValidatesForwardEmailScreenOnWelcomeEmail(): Promise<void> {
    await this.executeLegacyStep("user validates forward email screen on welcome email", {});
  }

  async userValidatesBusinessTabScreen(): Promise<void> {
    await this.executeLegacyStep("user validates Business Tab screen", {});
  }

  async userValidatesInteractionTabScreen(): Promise<void> {
    await this.executeLegacyStep("user validates Interaction Tab screen", {});
  }

  async userValidatesMessagesTabScreen(): Promise<void> {
    await this.executeLegacyStep("user validates Messages Tab screen", {});
  }

  async userValidatesSettingsScreen(): Promise<void> {
    await this.executeLegacyStep("user validates Settings screen", {});
  }

  async userValidatesProfileInformationScreen(): Promise<void> {
    await this.executeLegacyStep("user validates Profile Information screen", {});
  }

  async userValidatesShowmemagicInSettingsScreen(): Promise<void> {
    await this.executeLegacyStep("user validates ShowMeMagic in Settings screen", {});
  }

  async userValidatesCredentialsInSettingsScreen(): Promise<void> {
    await this.executeLegacyStep("user validates Credentials in Settings screen", {});
  }

  async userClosesApplitoolsEyesAfterValidation(): Promise<void> {
    await this.executeLegacyStep("user closes applitools eyes after validation", {});
  }
}

export const tovalidatetheuiwithapplitoolsfeatureslegacyiomdapplitoolsonboardinguicheckpage = new ToValidateTheUiWithApplitoolsFeaturesLegacyIomdApplitoolsOnboardingUicheckPage();
