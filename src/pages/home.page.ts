import { BasePage } from "./base.page";
import { commonUtilityMethodsPage } from "./common-utility-methods.page";
import { legacyJavaMethodBridge } from "../support/legacy-java-method-bridge";

export class HomePage extends BasePage {
  constructor() {
    super("HomePage");
  }

  private async tapSelector(selector: string, timeout = 20000): Promise<void> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    await element.click();
  }

  private async typeSelector(selector: string, value: string, timeout = 20000): Promise<void> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    await element.setValue(value);
  }

  async userVerifiesDisplayOfThe(username: string): Promise<boolean> {
    const source = await driver.getPageSource();
    return source.includes(username);
  }

  async userVeriifesTheDisplayOfTheUserTypeAccount(usertype: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVeriifesTheDisplayOfTheUserTypeAccount", ["usertype"], [usertype]));
  }

  async userVerifiestheDisplayOfThemailaddressandphonenumberinTheApplicationPage(mailid: string, phonenumber: string, addressdetails: string): Promise<void> {
    await legacyJavaMethodBridge.execute("HomePage", "userVerifiestheDisplayOfThemailaddressandphonenumberinTheApplicationPage", ["mailid", "phonenumber", "addressdetails"], [mailid, phonenumber, addressdetails]);
  }

  async userVerifiesTheDisplayOfThePrimaryUserTyper(usertype: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesTheDisplayOfThePrimaryUserTyper", ["usertype"], [usertype]));
  }

  async userVerifiesTheDisplayOfTheAnonymousMailIDNumberAndAddressDetails(anonomyousmailid: string, anonomyousphonenumber: string, anonomyousaddressdetail: string): Promise<void> {
    await legacyJavaMethodBridge.execute("HomePage", "userVerifiesTheDisplayOfTheAnonymousMailIDNumberAndAddressDetails", ["anonomyousmailid", "anonomyousphonenumber", "anonomyousaddressdetail"], [anonomyousmailid, anonomyousphonenumber, anonomyousaddressdetail]);
  }

  async userVerifiesTheDisplayOfTheDisplayofTheAnonymousUser(anonomyoususertype: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesTheDisplayOfTheDisplayofTheAnonymousUser", ["anonomyoususertype"], [anonomyoususertype]));
  }

  async ValidaytesthedisplayofthemessageAlertAsUserIsNotDisplaying(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "ValidaytesthedisplayofthemessageAlertAsUserIsNotDisplaying", [], []));
  }

  async userValidatesTheDisplayOfIncorrectMailIdErrorMessageAfterEnteringTheincorrectDetails(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userValidatesTheDisplayOfIncorrectMailIdErrorMessageAfterEnteringTheincorrectDetails", [], []));
  }

  async userNaviagtesToTheSettingsApplication(): Promise<void> {
    await driver.activateApp("com.apple.Preferences");
  }

  async userNavigatestoTheUrl(URL: string): Promise<void> {
    await browser.url(URL);
  }

  async userVerifiesTheExtensionIsGettingEnabledAndVerifesRequiredDetails(): Promise<boolean> {
    const source = await driver.getPageSource();
    return source.includes("node") || source.includes("Node");
  }

  async userValidatesTheDisplahyOfTheHeaderValue(headervalue: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userValidatesTheDisplahyOfTheHeaderValue", ["headervalue"], [headervalue]));
  }

  async userValidatesTheDisplayOfThefeedbackLinkIsGettingDisplayedInTheExtensionm(feedback: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userValidatesTheDisplayOfThefeedbackLinkIsGettingDisplayedInTheExtensionm", ["feedback"], [feedback]));
  }

  async userValidatesTheDisplayOfTheNameAndEmailTextInTheExtensionPopup(name: string, emailid: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userValidatesTheDisplayOfTheNameAndEmailTextInTheExtensionPopup", ["name", "emailid"], [name, emailid]));
  }

  async userSelectsTheDetailsAndClicksOnTheFillButton(): Promise<void> {
    await commonUtilityMethodsPage.userSelectsTokenisedMailId();
    await commonUtilityMethodsPage.userClicksFillButton();
  }

  async userVerifiesTheEnteredDetailsAreGettingDisplayedAndEnteredInTheCorrectField(): Promise<void> {
    await legacyJavaMethodBridge.execute("HomePage", "userVerifiesTheEnteredDetailsAreGettingDisplayedAndEnteredInTheCorrectField", [], []);
  }

  async userVerifiestheCreateAccountAndSignUpAccountAndClicksonIt(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiestheCreateAccountAndSignUpAccountAndClicksonIt", [], []));
  }

  async userClicksOnCreateAccountButtonInTheWebsite(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Create account') or contains(@label,'Create account') or contains(@text,'Create account')]`);
    return true;
  }

  async userClicksOnFirstProductInCoravin(): Promise<boolean> {
    await this.tapSelector(`(//XCUIElementTypeOther[contains(@name,'Product')] | //*[contains(@name,'Add to cart')] | //*[contains(@text,'Add to cart')])[1]`);
    return true;
  }

  async userClicksOnFirstProductInTedbaker(): Promise<boolean> {
    await this.tapSelector(`(//*[contains(@name,'product') or contains(@label,'product') or contains(@text,'product')])[1]`);
    return true;
  }

  async userEntersPasswordInCoravinWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersPasswordInCoravinWebsite", [], []));
  }

  async userEntersPasswordInEcoyaWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersPasswordInEcoyaWebsite", [], []));
  }

  async userEntersPasswordInGoodBatchWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersPasswordInGoodBatchWebsite", [], []));
  }

  async userEntersPasswordInExpediaWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersPasswordInExpediaWebsite", [], []));
  }

  async userEntersPasswordInEtsyWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersPasswordInEtsyWebsite", [], []));
  }

  async userEntersPasswordInNYtimesWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersPasswordInNYtimesWebsite", [], []));
  }

  async userVerifiesThedetailsAreGettingAsExpectedInTheFieldBox(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesThedetailsAreGettingAsExpectedInTheFieldBox", [], []));
  }

  async validatesTheDisplayOfTheautofillDetailsAreGettingEnteredInTheFieldBox(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "validatesTheDisplayOfTheautofillDetailsAreGettingEnteredInTheFieldBox", [], []));
  }

  async userClickOnTheSignInButton(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Sign in') or contains(@label,'Sign in') or contains(@text,'Sign in')]`);
    return true;
  }

  async userValidatesTheDisplayOfTheAutofillDetailsAreGettingDisplayedAsExpected(): Promise<void> {
    await legacyJavaMethodBridge.execute("HomePage", "userValidatesTheDisplayOfTheAutofillDetailsAreGettingDisplayedAsExpected", [], []);
  }

  async userClicksOnTheSignInButton(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Sign in') or contains(@label,'Sign in') or contains(@text,'Sign in')]`);
    return true;
  }

  async userVerifiesTheCheckoutIconAndClicksOnIt(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Checkout') or contains(@label,'Checkout') or contains(@text,'Checkout')]`);
    return true;
  }

  async userClicksOnContinueToCheckoutButtonInTheCheckoutPage(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Continue to checkout') or contains(@label,'Continue to checkout') or contains(@text,'Continue to checkout')]`);
    return true;
  }

  async userSelectsTheAddressAndPhoneNumberAndAddressFromTheExtension(phonenumber: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userSelectsTheAddressAndPhoneNumberAndAddressFromTheExtension", ["phonenumber"], [phonenumber]));
  }

  async validatesTheShippingOptionAvailableForTheUser(getshippingoption: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "validatesTheShippingOptionAvailableForTheUser", ["getshippingoption"], [getshippingoption]));
  }

  async userValidatedAndClicksToTheContinueToPaymentMethod(continuetopayment: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userValidatedAndClicksToTheContinueToPaymentMethod", ["continuetopayment"], [continuetopayment]));
  }

  async userClicksOnTheCreditCardDetailsAndClicksOnTheFillButton(): Promise<void> {
    await legacyJavaMethodBridge.execute("HomePage", "userClicksOnTheCreditCardDetailsAndClicksOnTheFillButton", [], []);
  }

  async userLaunchesThehindustanTimesAndVerifiesTheNewsLetterSignUp(url: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userLaunchesThehindustanTimesAndVerifiesTheNewsLetterSignUp", ["url"], [url]));
  }

  async userClicksOnTheEmailSignUpButtonInTheNewsLetter(newsletteremailsignnup: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksOnTheEmailSignUpButtonInTheNewsLetter", ["newsletteremailsignnup"], [newsletteremailsignnup]));
  }

  async userLaunchesTheNewYorkTimes(url: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userLaunchesTheNewYorkTimes", ["url"], [url]));
  }

  async userLaunchesTheEmailButtonInTheNewYorkTimes(signup: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userLaunchesTheEmailButtonInTheNewYorkTimes", ["signup"], [signup]));
  }

  async userEntersTheEmailFieldInTheDropDownBox(): Promise<void> {
    await this.typeSelector(`(//XCUIElementTypeTextField | //android.widget.EditText)[1]`, "autofill@example.com");
  }

  async userClicksonTheContinueButton(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Continue') or contains(@label,'Continue') or contains(@text,'Continue')]`);
    return true;
  }

  async clicksOnLoginButtonOnNewYorkTimes(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "clicksOnLoginButtonOnNewYorkTimes", [], []));
  }

  async userClickSonTheButtonToEnableTheSignUpPage(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClickSonTheButtonToEnableTheSignUpPage", [], []));
  }

  async user_launches_the_tedbaker_website_something(url: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "user_launches_the_tedbaker_website_something", ["url"], [url]));
  }

  async user_clicks_on_the_go_to_site_button(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Go to site') or contains(@label,'Go to site') or contains(@text,'Go to site')]`);
    return true;
  }

  async user_accepts_the_accept_all_cookies_button(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Accept All') or contains(@label,'Accept All') or contains(@text,'Accept All')]`);
    return true;
  }

  async user_clicks_on_the_signup_button(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Sign up') or contains(@label,'Sign up') or contains(@text,'Sign up')]`);
    return true;
  }

  async userClicksOnTheEmailInputBox(): Promise<boolean> {
    await this.tapSelector(`(//XCUIElementTypeTextField | //android.widget.EditText)[1]`);
    return true;
  }

  async userClickOnEnterUsingPasswordLink(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClickOnEnterUsingPasswordLink", [], []));
  }

  async userClicksOnTheCartButton(): Promise<boolean> {
    await this.tapSelector(`//*[contains(@name,'Cart') or contains(@label,'Cart') or contains(@text,'Cart')]`);
    return true;
  }

  async userEntersThePasswordandClicksOnTheEnterButton(password: string): Promise<boolean> {
    await this.typeSelector(`//XCUIElementTypeSecureTextField | //android.widget.EditText[@password='true']`, password);
    await this.tapSelector(`//*[contains(@name,'Enter') or contains(@label,'Enter') or contains(@text,'Enter')]`);
    return true;
  }

  async userClicksOnTheCheckoutButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksOnTheCheckoutButton", [], []));
  }

  async userClicksAndSelectsTheWine(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksAndSelectsTheWine", [], []));
  }

  async userClicksOnTheAddToCartButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksOnTheAddToCartButton", [], []));
  }

  async userClicksOnThePaymentAndClickingonTheContinueButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksOnThePaymentAndClickingonTheContinueButton", [], []));
  }

  async userValidatesAndSwitchesToTheContentAddProductToTheCart(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userValidatesAndSwitchesToTheContentAddProductToTheCart", [], []));
  }

  async userClicksOnTheEnterButtonInTheWebPage(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksOnTheEnterButtonInTheWebPage", [], []));
  }

  async userClicksThebuisnessAndVerifiesTheDetailsPresentInside(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksThebuisnessAndVerifiesTheDetailsPresentInside", [], []));
  }

  async uservalidatesthesomethingandclicksonit(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "uservalidatesthesomethingandclicksonit", [], []));
  }

  async userVerifiesTheDisplayOfTheBuisnessNameAndClicksOnIt(buisnessname: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesTheDisplayOfTheBuisnessNameAndClicksOnIt", ["buisnessname"], [buisnessname]));
  }

  async userValidatesAndVeriifesTheDisplayOfTheBuisnessNameCoravin(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userValidatesAndVeriifesTheDisplayOfTheBuisnessNameCoravin", [], []));
  }

  async validatesTheDisplayOfTheEmailCount(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "validatesTheDisplayOfTheEmailCount", [], []));
  }

  async validatesAndClicksOnTheNotificationTab(notification: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "validatesAndClicksOnTheNotificationTab", ["notification"], [notification]));
  }

  async validatesTheDisplayOfTheNotificatinTab(notification: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "validatesTheDisplayOfTheNotificatinTab", ["notification"], [notification]));
  }

  async validatesTheDisplayOfTheForgotPassswordLinkAndClicksOnIt(forgotpassword: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "validatesTheDisplayOfTheForgotPassswordLinkAndClicksOnIt", ["forgotpassword"], [forgotpassword]));
  }

  async userEntersTheEmaiValueAndClicksOnTheSubmitButton(emailid: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersTheEmaiValueAndClicksOnTheSubmitButton", ["emailid"], [emailid]));
  }

  async validatesTheDisplayOfTheForgotPasswordLinAndClicsOnItandVerifiesTheDetailsPresentInsideTheTab(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "validatesTheDisplayOfTheForgotPasswordLinAndClicsOnItandVerifiesTheDetailsPresentInsideTheTab", [], []));
  }

  async validatesTheDisplayOfTheForgotEmailLink(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "validatesTheDisplayOfTheForgotEmailLink", [], []));
  }

  async ValidatesTheDisplayOfTheOverallSummaryMessage(overallsummary: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "ValidatesTheDisplayOfTheOverallSummaryMessage", ["overallsummary"], [overallsummary]));
  }

  async ValidatesTheDisplayOfTheRealDataUsageText(realdata: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "ValidatesTheDisplayOfTheRealDataUsageText", ["realdata"], [realdata]));
  }

  async ValidatesTheDisplayOfTheLastSevenDaysText(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "ValidatesTheDisplayOfTheLastSevenDaysText", [], []));
  }

  async ValidatesTheDisplayOfEarlierTransactionTextHeader(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "ValidatesTheDisplayOfEarlierTransactionTextHeader", [], []));
  }

  async ValidatesTheDisplayOfTheAnonymousDataHeader(anonmyousdata: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "ValidatesTheDisplayOfTheAnonymousDataHeader", ["anonmyousdata"], [anonmyousdata]));
  }

  async validatesTheNumberOfTransactionWhichWasDoneOnLastSevenDays(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "validatesTheNumberOfTransactionWhichWasDoneOnLastSevenDays", [], []));
  }

  async user_verifies_the_number_of_transaction_happened_in_earier_transaction(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "user_verifies_the_number_of_transaction_happened_in_earier_transaction", [], []));
  }

  async userEntersEmailAndClickOnTheFetchButton(email: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersEmailAndClickOnTheFetchButton", ["email"], [email]));
  }

  async userLaunchesFiveMarysUrl(url: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userLaunchesFiveMarysUrl", ["url"], [url]));
  }

  async userclicksLoginbutton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksLoginbutton", [], []));
  }

  async userclicksForgotButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksForgotButton", [], []));
  }

  async userVerifiesThedetailsAreGettingAsExpectedInTheFiveMarysWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesThedetailsAreGettingAsExpectedInTheFiveMarysWebsite", [], []));
  }

  async userVerifiesForgotPassworddetailsAreGettingAsExpectedInTheFiveMarysWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesForgotPassworddetailsAreGettingAsExpectedInTheFiveMarysWebsite", [], []));
  }

  async userVerifiesTheCheckoutdetailsAreGettingAsExpectedInTheFiveMarysWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesTheCheckoutdetailsAreGettingAsExpectedInTheFiveMarysWebsite", [], []));
  }

  async userVerifiesTheCarddetailsAreGettingAsExpectedInTheFiveMarysWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesTheCarddetailsAreGettingAsExpectedInTheFiveMarysWebsite", [], []));
  }

  async userSelectsFirstProductCategory(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userSelectsFirstProductCategory", [], []));
  }

  async userSelectsFirstProduct(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userSelectsFirstProduct", [], []));
  }

  async userClicksAddToCartButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksAddToCartButton", [], []));
  }

  async userClicksCheckoutButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksCheckoutButton", [], []));
  }

  async userClicksContinueShippingButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksContinueShippingButton", [], []));
  }

  async userClicksContinuePaymentButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksContinuePaymentButton", [], []));
  }

  async userClicksPayNowButton(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksPayNowButton", [], []));
  }

  async userFillsCardDetailsinFiveMarysWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsCardDetailsinFiveMarysWebsite", [], []));
  }

  async userLaunchesMylaporeExpressUrl(url: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userLaunchesMylaporeExpressUrl", ["url"], [url]));
  }

  async userclicksMyAccButtoninME(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksMyAccButtoninME", [], []));
  }

  async userclicksSignInButtoninME(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksSignInButtoninME", [], []));
  }

  async userclicksSignupButtoninME(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksSignupButtoninME", [], []));
  }

  async userclicksAddToCartButtoninME(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksAddToCartButtoninME", [], []));
  }

  async userclicksMondayAndFirstCustomBtninME(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksMondayAndFirstCustomBtninME", [], []));
  }

  async userAgreesTermsAndClicksCheckOutBtninME(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userAgreesTermsAndClicksCheckOutBtninME", [], []));
  }

  async userVerifiesTheCheckoutdetailsAreGettingAsExpectedInMylaporeExpressWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesTheCheckoutdetailsAreGettingAsExpectedInMylaporeExpressWebsite", [], []));
  }

  async userClicksContinueButtoninME(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksContinueButtoninME", [], []));
  }

  async userVerifiesThedetailsAreGettingAsExpectedInMylaporeExpressWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesThedetailsAreGettingAsExpectedInMylaporeExpressWebsite", [], []));
  }

  async userVerifiesTheForgetPwddetailsAreGettingAsExpectedInMEWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesTheForgetPwddetailsAreGettingAsExpectedInMEWebsite", [], []));
  }

  async userEntersZipCodeAndCheckForDeliveryInMEWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersZipCodeAndCheckForDeliveryInMEWebsite", [], []));
  }

  async userProvidesInputsForMenu(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userProvidesInputsForMenu", [], []));
  }

  async userFillsCardDetailsinMylaporeExpressWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsCardDetailsinMylaporeExpressWebsite", [], []));
  }

  async userClicksContinuePaymentButtoninME(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClicksContinuePaymentButtoninME", [], []));
  }

  async userFillsCardDetailsinSVBConnectWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsCardDetailsinSVBConnectWebsite", [], []));
  }

  async userLaunchesGoodEggsUrl(url: string): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userLaunchesGoodEggsUrl", ["url"], [url]));
  }

  async userclicksSignInbuttoninGoodEggs(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksSignInbuttoninGoodEggs", [], []));
  }

  async userclicksForgotButtoninGoodEggs(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksForgotButtoninGoodEggs", [], []));
  }

  async userVerifiesThedetailsAreGettingAsExpectedInTheGoodEggsWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesThedetailsAreGettingAsExpectedInTheGoodEggsWebsite", [], []));
  }

  async userVerifiesForgotPassworddetailsAreGettingAsExpectedInTheGoodEggsWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesForgotPassworddetailsAreGettingAsExpectedInTheGoodEggsWebsite", [], []));
  }

  async userFillsCardDetailsingoodeggs(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsCardDetailsingoodeggs", [], []));
  }

  async userFillsAddressingoodeggs(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsAddressingoodeggs", [], []));
  }

  async userFillsCardDetailsinCoravin(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsCardDetailsinCoravin", [], []));
  }

  async userFillsCardDetailsinTedBaker(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsCardDetailsinTedBaker", [], []));
  }

  async userClosesPopupInEcoya(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClosesPopupInEcoya", [], []));
  }

  async userclicksFirstProductinPorterAndYork(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksFirstProductinPorterAndYork", [], []));
  }

  async userFillsCardDetailsinPorterAndYork(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsCardDetailsinPorterAndYork", [], []));
  }

  async userclicksFirstProductinSkullCandy(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userclicksFirstProductinSkullCandy", [], []));
  }

  async userFillsCardDetailsinSkullCandy(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsCardDetailsinSkullCandy", [], []));
  }

  async userClosePopupinAlibaba(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClosePopupinAlibaba", [], []));
  }

  async userScrollsDownToContactField(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userScrollsDownToContactField", [], []));
  }

  async userEntersRandomEmaildetailsInBookingWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInBookingWebsite", [], []));
  }

  async userFillsAddressInSkullCandy(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsAddressInSkullCandy", [], []));
  }

  async userFillsPasswordInBooking(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsPasswordInBooking", [], []));
  }

  async userFillsEmailInACF(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userFillsEmailInACF", [], []));
  }

  async userEntersRandomEmaildetailsInAirbnbWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInAirbnbWebsite", [], []));
  }

  async userEntersRandomEmaildetailsInAirNewzealandWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInAirNewzealandWebsite", [], []));
  }

  async userEntersRandomEmaildetailsInAmazonWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInAmazonWebsite", [], []));
  }

  async userEntersRandomEmaildetailsInElementorWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInElementorWebsite", [], []));
  }

  async userEntersRandomEmaildetailsInBlueCoffeeWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInBlueCoffeeWebsite", [], []));
  }

  async userEntersRandomEmaildetailsInClipperCardWebsite(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInClipperCardWebsite", [], []));
  }

  async userClosePopupInDeadlyponies(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userClosePopupInDeadlyponies", [], []));
  }

  async userEntersRandomEmaildetailsInDeadlyponies(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInDeadlyponies", [], []));
  }

  async userEntersRandomEmaildetailsInEcoya(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInEcoya", [], []));
  }

  async userEntersRandomEmaildetailsInUnitedHealth(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInUnitedHealth", [], []));
  }

  async userEntersRandomEmaildetailsInTravelers(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInTravelers", [], []));
  }

  async userEntersRandomEmaildetailsInAllState(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInAllState", [], []));
  }

  async userEntersRandomEmaildetailsInNationwide(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomEmaildetailsInNationwide", [], []));
  }

  async userEntersSignupdetailsInNationwide(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersSignupdetailsInNationwide", [], []));
  }

  async userEntersRandomdataInFidelity(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userEntersRandomdataInFidelity", [], []));
  }

  async userVerifiesBusinessDetailsForCoravin(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userVerifiesBusinessDetailsForCoravin", [], []));
  }

  async userScrollsDownToNewsletterTedbaker(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userScrollsDownToNewsletterTedbaker", [], []));
  }

  async userselectAddressinTedbaker(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userselectAddressinTedbaker", [], []));
  }

  async userenterPhNo(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userenterPhNo", [], []));
  }

  async userenterPhNoinLogin(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userenterPhNoinLogin", [], []));
  }

  async userScrollsDownForZipCodeInMylapore(): Promise<boolean> {
    return Boolean(await legacyJavaMethodBridge.execute("HomePage", "userScrollsDownForZipCodeInMylapore", [], []));
  }
}

export const homePage = new HomePage();
