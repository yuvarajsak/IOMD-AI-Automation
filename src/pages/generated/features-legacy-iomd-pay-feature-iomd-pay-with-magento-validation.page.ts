import { BasePage } from "../base.page";

export class I2iValidatesIomdPayFeatureAndCheecksTheOrderPlacedDataInMagentoFeaturesLegacyIomdPayFeatureIomdPayWithMagentoValidationPage extends BasePage {
  constructor() {
    super("I2iValidatesIomdPayFeatureAndCheecksTheOrderPlacedDataInMagentoFeaturesLegacyIomdPayFeatureIomdPayWithMagentoValidationPage");
  }

  async userCompletesOnboardingFlowWithCardData(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with card data", {});
  }

  async userLaunchesTheWebsiteIomdpayurl(iomdpayurl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<iomdpayurl>\"", { "iomdpayurl": iomdpayurl });
  }

  async userClicksShowdetailsButtonByOnlyNameInTheWebsite(showdetails: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<showdetails>\" button by only name in the Website", { "showdetails": showdetails });
  }

  async userClicksVisitthiswebsiteButtonByOnlyNameInTheWebsite(visitthiswebsite: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<visitthiswebsite>\" button by only name in the Website", { "visitthiswebsite": visitthiswebsite });
  }

  async userClicksVisitwebsiteButtonByOnlyNameInTheWebsite(visitwebsite: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<VisitWebsite>\" button by only name in the Website", { "visitwebsite": visitwebsite });
  }

  async userClicksAddcartbtnButtonByNameWithIndexInTheWebsite(addcartbtn: string, index: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<addCartBtn>\" button by name with \"<index>\" in the Website", { "addcartbtn": addcartbtn, "index": index });
  }

  async userClicksMycartbtnButtonByNameInTheWebsite(mycartbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<myCartBtn>\" button by name in the Website", { "mycartbtn": mycartbtn });
  }

  async userClicksViewcartButtonByOnlyStaictextInTheWebsite(viewcart: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<viewCart>\" button by only Staictext in the Website", { "viewcart": viewcart });
  }

  async userClicksPaywithiomdButtonByNameInTheWebsite(paywithiomd: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<payWithIOMD>\" button by name in the Website", { "paywithiomd": paywithiomd });
  }

  async userValidatesDataInsideIomdPayExtension(): Promise<void> {
    await this.executeLegacyStep("user validates data inside IOMD Pay Extension", {});
  }

  async userClicksRevieworderButtonByOnlyNameInTheWebsite(revieworder: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<reviewOrder>\" button by only name in the Website", { "revieworder": revieworder });
  }

  async userClicksShippingbtnButtonByNameWithSindexInTheWebsite(shippingbtn: string, sindex: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<shippingBtn>\" button by name with \"<sindex>\" in the Website", { "shippingbtn": shippingbtn, "sindex": sindex });
  }

  async userVerifiesTheAmountWithShippingCost(): Promise<void> {
    await this.executeLegacyStep("user verifies the amount with shipping cost", {});
  }

  async userClicksPlaceorderButtonByOnlyNameInTheWebsite(placeorder: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<placeOrder>\" button by only name in the Website", { "placeorder": placeorder });
  }

  async userVerifiesThePlacedOrderIsDisplayedInIomdpayAdmin(): Promise<void> {
    await this.executeLegacyStep("user verifies the placed order is displayed in IOMDPay Admin", {});
  }

  async userClicksPlaceorderButtonByNameInTheWebsite(placeorder: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<placeOrder>\" button by name in the Website", { "placeorder": placeorder });
  }

  async userCompletesOnboardingFlowWithInvalidAddress(): Promise<void> {
    await this.executeLegacyStep("user completes onboarding flow with invalid address", {});
  }

  async userClicksOnTheSaveTokenizedEmailButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the save tokenized email button", {});
  }

  async userClicksOnTheCheckYourMessageButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the check your message button", {});
  }

  async userClicksOnTheShowMeTheMagicButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the show me the magic button", {});
  }

  async userFillsTokenisedFirstAndLastName(): Promise<void> {
    await this.executeLegacyStep("user fills tokenised First and Last name", {});
  }

  async userFillsTokenisedPersonalInformationWithInvalidAddress(): Promise<void> {
    await this.executeLegacyStep("user fills tokenised personal information with invalid address", {});
  }

  async userClicksOnTheSaveAndShowMeTheMagicButton(): Promise<void> {
    await this.executeLegacyStep("user clicks on the save and show me the magic button", {});
  }

  async userNavigatesToTheSettingsApplicationAndEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user navigates to the settings application and enables the extension", {});
  }

  async userNavigatesToTheSafariApplication(): Promise<void> {
    await this.executeLegacyStep("user navigates to the safari application", {});
  }

  async userLaunchesTheWebsiteUrl(url: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<url>\"", { "url": url });
  }

  async userLaunchesTheWebsiteProducturl(producturl: string): Promise<void> {
    await this.executeLegacyStep("user launches the website \"<producturl>\"", { "producturl": producturl });
  }

  async userSelectsTheFirstProductInCoravinForCheckingOut(): Promise<void> {
    await this.executeLegacyStep("user selects the first product in coravin for checking out", {});
  }

  async userClicksAdddtocartbtnButtonByOnlyNameInTheWebsite(adddtocartbtn: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<adddToCartBtn>\" button by only name in the Website", { "adddtocartbtn": adddtocartbtn });
  }

  async userClicksOnTheCheckoutIconAndVerifiesTheProduct(): Promise<void> {
    await this.executeLegacyStep("user clicks on the checkout Icon and verifies the product", {});
  }

  async userClicksOnTheContinueToCheckoutButtonInCheckoutPage(): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue to checkout button in checkout page", {});
  }

  async userClicksGuestcheckoutButtonByOnlyNameInTheWebsite(guestcheckout: string): Promise<void> {
    await this.executeLegacyStep("user clicks \"<guestcheckout>\" button by only name in the Website", { "guestcheckout": guestcheckout });
  }

  async userEnablesTheExtension(): Promise<void> {
    await this.executeLegacyStep("user enables the Extension", {});
  }

  async userSelectsTokenisedEmailFromExtension(): Promise<void> {
    await this.executeLegacyStep("user selects tokenised Email from Extension", {});
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

  async userClicksFillButtonFromExtension(): Promise<void> {
    await this.executeLegacyStep("user clicks Fill button from Extension", {});
  }

  async userVerifiesTheAutoFillDetailsForTokenisedEmailAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for tokenised Email are filled as expected for the Website", {});
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

  async userVerifiesTheAutoFillDetailsForPersonalPhonenumberAreFilledAsExpectedForTheWebsite(): Promise<void> {
    await this.executeLegacyStep("user verifies the auto fill details for personal Phonenumber are filled as expected for the Website", {});
  }

  async userClicksOnTheGetShippingOptionGetshippingoption(getshippingoption: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the get shipping option \"<GetShippingOption>\"", { "getshippingoption": getshippingoption });
  }

  async userClicksOnTheContinueToPaymentButtonContinuetopayment(continuetopayment: string): Promise<void> {
    await this.executeLegacyStep("user clicks on the continue to payment button \"<continueToPayment>\"", { "continuetopayment": continuetopayment });
  }

  async userFillsTheCardDetailsInCoravinWebsite(): Promise<void> {
    await this.executeLegacyStep("user Fills the card details in Coravin website", {});
  }

  async userAcceptsThePopup(): Promise<void> {
    await this.executeLegacyStep("user accepts the popup", {});
  }

  async userSelectInvalidAddressFromList(): Promise<void> {
    await this.executeLegacyStep("user select invalid address from list", {});
  }
}

export const i2ivalidatesiomdpayfeatureandcheeckstheorderplaceddatainmagentofeatureslegacyiomdpayfeatureiomdpaywithmagentovalidationpage = new I2iValidatesIomdPayFeatureAndCheecksTheOrderPlacedDataInMagentoFeaturesLegacyIomdPayFeatureIomdPayWithMagentoValidationPage();
