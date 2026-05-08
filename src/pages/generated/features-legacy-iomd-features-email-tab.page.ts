import { BasePage } from "../base.page";

export class I2i36ValidatesTheAurofillOperationInTheCoravinWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesEmailTabPage extends BasePage {
  constructor() {
    super("I2i36ValidatesTheAurofillOperationInTheCoravinWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesEmailTabPage");
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

  async userEnablesTheExtensionAndVerifiesTheExpectedDetailsArePresentForThePage(): Promise<void> {
    await this.executeLegacyStep("user enables the extension and verifies the expected details are present for the page", {});
  }

  async userVerifiesTheDisplayOfTheHeaderHeadervalue(headervalue: string): Promise<void> {
    await this.executeLegacyStep("user verifies the display of the header \"<HeaderValue>\"", { "headervalue": headervalue });
  }

  async userVerifiesTheVerifiesTheDisplayOfTheFeedbackLinknFeedback(feedback: string): Promise<void> {
    await this.executeLegacyStep("user verifies the verifies the display of the feedback linkn \"<feedBack>\"", { "feedback": feedback });
  }

  async userVerifiesTheDisplayOfTheNameNameAndEmailEmailidHeadersPresentInTheExtension(name: string, emailid: string): Promise<void> {
    await this.executeLegacyStep("User verifies the display of the name \"<name>\" and email \"<emailId>\" headers present in the extension", { "name": name, "emailid": emailid });
  }

  async userSelectsTheValueFromTheExtensionAndClicksOnTheFillButton(): Promise<void> {
    await this.executeLegacyStep("user selects the value from the extension and clicks on the fill button", {});
  }

  async userVerifiesTheDetailsAreGettingEnteredInTheCorrectFieldAsExpected(): Promise<void> {
    await this.executeLegacyStep("user verifies the details are getting entered in the correct field as expected", {});
  }

  async userClicksOnTheSigninorsignupbuttonInTheCoravinWebsite(): Promise<void> {
    await this.executeLegacyStep("user clicks on the signInOrSignUpButton in the coravin website", {});
  }

  async userClicksCreateAccountButton(): Promise<void> {
    await this.executeLegacyStep("user clicks create account button", {});
  }

  async userVerifiesTheDetailsAreGettingEnteredAsExpectedInTheFieldBox(): Promise<void> {
    await this.executeLegacyStep("user verifies the details are getting entered as expected in the field box", {});
  }

  async userClicksOnTheSignInButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the sign in button", {});
  }

  async userVerifiesTheDisplayOfTheAutofillDetAilsAreEnteredAsExpected(): Promise<void> {
    await this.executeLegacyStep("user verifies the display of the autofill det ails are entered as expected", {});
  }

  async userVerifiesTheAutofillExtensionAndVerifiesNoDetailsIsGettingDisplayed(): Promise<void> {
    await this.executeLegacyStep("user verifies the autofill extension and verifies no details is getting displayed", {});
  }

  async userClicksOnTheSigninButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the signIn button", {});
  }

  async userClicksOnTheCheckoutIconAndVerifiesTheProduct(): Promise<void> {
    await this.executeLegacyStep("user clicks on the checkout Icon and verifies the product", {});
  }

  async userClicksOnTheContinueToCheckoutButtonInCheckoutPage(): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue to checkout button in checkout page", {});
  }

  async userSelectsTheAddressAndPhoneNumberPhonenumberInTheAutofillOption(phonenumber: string): Promise<void> {
    await this.executeLegacyStep("user selects the address and phone number \"<phoneNumber>\" in the autofill option", { "phonenumber": phonenumber });
  }

  async userClicksOnTheGetShippingOptionGetshippingoption(getshippingoption: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the get shipping option \"<GetShippingOption>\"", { "getshippingoption": getshippingoption });
  }

  async userClicksOnTheContinueToPaymentButtonContinuetopayment(continuetopayment: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue to payment button \"<continueToPayment>\"", { "continuetopayment": continuetopayment });
  }

  async userClicksOnTheCreditCardDetailsAndClicksOnTheFillButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the credit card details and clicks on the fill button", {});
  }
}

export const i2i36validatestheaurofilloperationinthecoravinwebsiteafterenablingtheextensionfeatureslegacyiomdfeaturesemailtabpage = new I2i36ValidatesTheAurofillOperationInTheCoravinWebsiteAfterEnablingTheExtensionFeaturesLegacyIomdFeaturesEmailTabPage();
