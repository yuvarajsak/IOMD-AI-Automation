import { BasePage } from "../base.page";

export class ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAirnewzealandApplicationFeaturesLegacyIomdFeaturesAirNewzealandPage extends BasePage {
  constructor() {
    super("ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAirnewzealandApplicationFeaturesLegacyIomdFeaturesAirNewzealandPage");
  }

  async userCompletesOnboardingFlow(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userClicksAllowoncebtnButtonByNameInTheWebsite(allowoncebtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<AllowOnceBtn>\" button by name in the Website", { "allowoncebtn": allowoncebtn });
  }

  async userClicksAllowButtonByOnlyNameInTheWebsite(allow: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Allow>\" button by only name in the Website", { "allow": allow });
  }

  async userClicksSigninButtonByNameWithIndexInTheWebsite(signin: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignIn>\" button by name with \"<Index>\" in the Website", { "signin": signin, "index": index });
  }

  async userEntersDataInLoginPageForAirnewzealandWebsite(): Promise<void> {
    await this.executeLegacyStep("user enters data in login page for airnewzealand website", {});
  }

  async userClicksSigninButtonByNameWithSindexInTheWebsite(signin: string, sindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<SignIn>\" button by name with \"<Sindex>\" in the Website", { "signin": signin, "sindex": sindex });
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

  async userVerifiesLoginFromInteractionTab(): Promise<void> {
    await this.executeLegacyStep("user verifies Login from interaction tab", {});
  }

  async userClicksForgotusernameButtonByNameWithFindexInTheWebsite(forgotusername: string, findex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<ForgotUsername>\" button by name with \"<Findex>\" in the Website", { "forgotusername": forgotusername, "findex": findex });
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

  async userClicksJoinButtonByNameWithFindexInTheWebsite(join: string, findex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<Join>\" button by name with \"<Findex>\" in the Website", { "join": join, "findex": findex });
  }

  async userSelectsPersonalUsernameFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Username from Extension", {});
  }

  async userSelectsPersonalAddressFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Address from Extension", {});
  }

  async userSelectsPersonalPhonenumberFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects personal Phonenumber from Extension", {});
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

export const tovalidatetheautofilloptionandinteractionaregettingcapturedcorrectlyintheairnewzealandapplicationfeatureslegacyiomdfeaturesairnewzealandpage = new ToValidateTheAutofillOptionAndInteractionAreGettingCapturedCorrectlyInTheAirnewzealandApplicationFeaturesLegacyIomdFeaturesAirNewzealandPage();
