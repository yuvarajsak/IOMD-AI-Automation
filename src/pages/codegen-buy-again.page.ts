import { env } from "../config/env";
import { testData } from "../data/test-data";
import { codegenOnboardingPage } from "./codegen-onboarding.page";

export class CodegenBuyAgainPage {
  private readonly defaultStorefrontUrl = "https://iomdnewgen21.myshopify.com/";
  private readonly defaultProductUrl = "https://iomdnewgen21.myshopify.com/products/the-collection-snowboard-liquid";
  private readonly defaultVariantId = "47568759685377";
  private readonly defaultProductName = "The Collection Snowboard: Liquid";
  private selectedProductName = "";
  private iomdBusinessOpened = false;
  private safariExtensionPermissionGranted = false;

  async startFromCompletedOnboarding(): Promise<void> {
    await codegenOnboardingPage.launchFresh();
    await this.clickIfVisible(`//*[@name="Allow" or @label="Allow"]`);
    await codegenOnboardingPage.continueFromSplash();
    await codegenOnboardingPage.skipGmailImport();
    await codegenOnboardingPage.expectCreateTokenVisible();
    await codegenOnboardingPage.enterUniqueCommerceToken();
    await codegenOnboardingPage.submitCommerceToken();
    await codegenOnboardingPage.expectTokenCreationProgress();
    await codegenOnboardingPage.expectPostCreateSuccess();
    await this.dismissPostOnboardingPrompts();
    await this.dismissNodeCommerceTokenOverlay();
  }

  async openShopifyStorefront(url = this.defaultStorefrontUrl): Promise<void> {
    if (this.isIos()) {
      await driver.activateApp(env.ios.safariBundleId);
      await browser.pause(1000);
    }
    await browser.url(url);
    await browser.pause(3000);
  }

  async unlockShopifyStore(): Promise<void> {
    const password = process.env.SHOPIFY_STORE_PASSWORD || "nodeC0nnect";
    const passwordField = await this.firstVisibleElement([
      `//XCUIElementTypeSecureTextField[@name='Enter store password']`,
      `//XCUIElementTypeSecureTextField[contains(@name,'password') or contains(@label,'password') or contains(@value,'password')]`,
      `//XCUIElementTypeSecureTextField`,
      `//android.widget.EditText`
    ], "store password field");
    await passwordField.click();
    await passwordField.clearValue();
    await passwordField.setValue(password);
    await this.closeKeyboardIfVisible();
    await this.clickFirstVisibleWithSwipe([
      `//XCUIElementTypeButton[@name='Enter' or @label='Enter']`,
      `//XCUIElementTypeButton[contains(@name,'Enter') or contains(@label,'Enter')]`,
      `//XCUIElementTypeButton[@name='Submit' or @label='Submit']`,
      `//*[@text='Enter' or @content-desc='Enter' or @text='Submit' or @content-desc='Submit']`
    ], "store password submit button", 3);
    await browser.pause(5000);
  }

  async enableNodeSafariExtension(): Promise<void> {
    await this.openSafariManageExtensions();
    const nodeToggle = await this.firstVisibleElement([
      `//XCUIElementTypeSwitch[@name='node.' or @label='node.']`,
      `//XCUIElementTypeSwitch[contains(@name,'node') or contains(@label,'node')]`,
      `//*[contains(@name,'node') or contains(@label,'node')]//XCUIElementTypeSwitch`
    ], "node Safari extension switch");
    const value = String(await nodeToggle.getAttribute("value"));
    if (value === "0" || value.toLowerCase() === "off") {
      await nodeToggle.click();
    }
    await this.clickByLabels(["Done"]);
    await this.grantSafariExtensionPermission();
  }

  async openAnyAvailableProduct(): Promise<void> {
    await this.grantSafariExtensionPermission();
    await browser.url(process.env.SHOPIFY_PRODUCT_URL || this.defaultProductUrl);
    await browser.pause(3000);
    await this.grantSafariExtensionPermission();
    await this.closeShopifyDrawerIfOpen();
    this.selectedProductName = await this.readCurrentProductName();
    if (!this.selectedProductName) {
      this.selectedProductName = this.defaultProductName;
    }
  }

  async addProductToCartAndStartCheckout(): Promise<void> {
    await this.closeShopifyDrawerIfOpen();
    if (await this.addKnownVariantAndOpenCheckout()) {
      return;
    }

    await this.clickWebOrNative(["Add to cart", "ADD TO CART"], [
      `//*[@name='Add to cart' or @label='Add to cart']`,
      `//*[contains(@name,'Add to cart') or contains(@label,'Add to cart') or contains(@name,'add to cart') or contains(@label,'add to cart')]`
    ], "Add to cart button");
    await browser.pause(2000);
    const clickedCheckout = await this.clickWebOrNativeOptional(["Check out", "Checkout", "CHECK OUT"], [
      `//*[@name='Check out' or @label='Check out' or @name='CHECK OUT']`,
      `//*[contains(@name,'Check out') or contains(@label,'Check out') or contains(@name,'Checkout') or contains(@label,'Checkout')]`
    ], "checkout button");
    if (!clickedCheckout) {
      await this.openShopifyCheckoutDirectly();
    }
  }

  async openKnownAvailableVariantCheckout(): Promise<void> {
    if (!(await this.addKnownVariantAndOpenCheckout())) {
      throw new Error("Unable to open checkout from the known available Shopify variant.");
    }
  }

  async enterInvalidShopifyStorePassword(): Promise<void> {
    const passwordField = await this.firstVisibleElement([
      `//XCUIElementTypeSecureTextField[@name='Enter store password']`,
      `//XCUIElementTypeSecureTextField[contains(@name,'password') or contains(@label,'password') or contains(@value,'password')]`,
      `//XCUIElementTypeSecureTextField`,
      `//android.widget.EditText`
    ], "store password field");
    await passwordField.click();
    await passwordField.clearValue();
    await passwordField.setValue(`invalid-${Date.now()}`);
    await this.closeKeyboardIfVisible();
    await this.clickFirstVisibleWithSwipe([
      `//XCUIElementTypeButton[@name='Enter' or @label='Enter']`,
      `//XCUIElementTypeButton[contains(@name,'Enter') or contains(@label,'Enter')]`,
      `//XCUIElementTypeButton[@name='Submit' or @label='Submit']`,
      `//*[@text='Enter' or @content-desc='Enter' or @text='Submit' or @content-desc='Submit']`
    ], "store password submit button", 3);
    await browser.pause(2500);
  }

  async openCheckoutWithEmptyCart(): Promise<void> {
    const baseUrl = this.shopifyBaseUrl();
    await browser.url(`${baseUrl}/cart/clear`);
    await browser.pause(1200);
    await browser.url(`${baseUrl}/checkout`);
    await browser.pause(3500);
  }

  async completeCheckoutContactDetails(): Promise<void> {
    const email = `qa_test${Date.now()}@mail.com`;
    await this.ensureCheckoutContactFormReady();
    await this.typeFirstVisible([
      `//XCUIElementTypeTextField[@name='Email or mobile phone number']`,
      `//XCUIElementTypeTextField[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email')]`,
      `//*[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email') or contains(@name,'mobile phone')]`
    ], email, "checkout email field");
    await this.typeFirstVisible([`//XCUIElementTypeTextField[@name='First name (optional)']`, `//*[contains(@name,'First name')]`], testData.personalFirstName, "first name field");
    await this.typeFirstVisible([`//XCUIElementTypeTextField[@name='Last name']`, `//*[contains(@name,'Last name')]`], testData.personalLastName, "last name field");
    const addressField = await this.firstVisibleElement([`//XCUIElementTypeTextField[@name='Address']`, `//*[contains(@name,'Address') or contains(@label,'Address')]`], "address field");
    await addressField.click();
    await addressField.clearValue();
    for (const character of testData.personalAddressIOMDPay1) {
      await addressField.addValue(character);
      await browser.pause(100);
    }
    await browser.pause(2500);
    if (this.isIos()) {
      await driver.execute("mobile: tap", { x: 160, y: 323 });
    }
    await this.closeKeyboardIfVisible();
    await this.completeRemainingShippingFields();
    await this.expectShippingAddressAccepted();
  }

  async submitInvalidCheckoutEmail(): Promise<void> {
    await this.ensureCheckoutContactFormReady();
    await this.typeFirstVisible(this.checkoutEmailSelectors(), "invalid-email", "checkout email field");
    await this.closeKeyboardIfVisible();
    await this.clickContinueCheckout();
    await browser.pause(1500);
  }

  async submitCheckoutWithoutRequiredAddress(): Promise<void> {
    await this.ensureCheckoutContactFormReady();
    await this.typeFirstVisible(this.checkoutEmailSelectors(), `qa_required_${Date.now()}@mail.com`, "checkout email field");
    await this.typeFirstVisible([`//XCUIElementTypeTextField[@name='First name (optional)']`, `//*[contains(@name,'First name')]`], testData.personalFirstName, "first name field");
    await this.typeFirstVisible([`//XCUIElementTypeTextField[@name='Last name']`, `//*[contains(@name,'Last name')]`], testData.personalLastName, "last name field");
    await this.closeKeyboardIfVisible();
    await this.clickContinueCheckout();
    await browser.pause(1800);
  }

  async enterPaymentDetails(): Promise<void> {
    await this.continueToPaymentIfNeeded();
    await this.typeTextFieldWithSwipe([
      `//XCUIElementTypeTextField[@name='Card number']`,
      `//XCUIElementTypeTextField[contains(@name,'Card number') or contains(@value,'Card number') or contains(@label,'Card number')]`
    ], process.env.SHOPIFY_TEST_CARD_NUMBER || "1", "card number field", 8);
    const future = new Date();
    future.setMonth(future.getMonth() + Math.floor(Math.random() * 60) + 1);
    const expiry = `${String(future.getMonth() + 1).padStart(2, "0")}/${future.getFullYear()}`;
    await this.typeTextFieldWithSwipe([
      `//XCUIElementTypeTextField[@name='Expiration date']`,
      `//XCUIElementTypeTextField[contains(@name,'Expiration date') or contains(@value,'Expiration date') or contains(@label,'Expiration date')]`
    ], expiry, "expiration date field", 5);
    await this.typeTextFieldWithSwipe([
      `//XCUIElementTypeTextField[@name='Security code']`,
      `//XCUIElementTypeTextField[contains(@name,'Security code') or contains(@value,'Security code') or contains(@label,'Security code')]`
    ], String(Math.floor(100 + Math.random() * 900)), "security code field", 5);
    await this.closeKeyboardIfVisible();
  }

  async submitPaymentWithoutSecurityCode(): Promise<void> {
    await this.continueToPaymentIfNeeded();
    await this.typeTextFieldWithSwipe([
      `//XCUIElementTypeTextField[@name='Card number']`,
      `//XCUIElementTypeTextField[contains(@name,'Card number') or contains(@value,'Card number') or contains(@label,'Card number')]`
    ], process.env.SHOPIFY_TEST_CARD_NUMBER || "1", "card number field", 8);
    const future = new Date();
    future.setMonth(future.getMonth() + 3);
    const expiry = `${String(future.getMonth() + 1).padStart(2, "0")}/${future.getFullYear()}`;
    await this.typeTextFieldWithSwipe([
      `//XCUIElementTypeTextField[@name='Expiration date']`,
      `//XCUIElementTypeTextField[contains(@name,'Expiration date') or contains(@value,'Expiration date') or contains(@label,'Expiration date')]`
    ], expiry, "expiration date field", 5);
    await this.closeKeyboardIfVisible();
    await this.clickFirstVisibleWithSwipe([`~Pay now`, `//*[@name='Pay now' or @label='Pay now' or contains(@name,'Pay now')]`], "Pay now button", 8);
    await browser.pause(2500);
  }

  async submitOrder(): Promise<void> {
    await this.clickFirstVisibleWithSwipe([`~Pay now`, `//*[@name='Pay now' or @label='Pay now' or contains(@name,'Pay now')]`], "Pay now button", 8);
    await browser.pause(6000);
  }

  async trackOrderFromThankYouPage(): Promise<void> {
    await this.clickFirstVisibleWithSwipe([
      `//XCUIElementTypeButton[contains(@name,'Track My Order') or contains(@label,'Track My Order')]`,
      `//*[contains(@name,'Track My Order') or contains(@label,'Track My Order')]`
    ], "Track My Order button", 10);
  }

  async returnToIomdApp(): Promise<void> {
    await driver.activateApp(env.apps.iomdBundleId);
    this.iomdBusinessOpened = false;
    await browser.pause(3000);
    await this.dismissNodeCommerceTokenOverlay();
  }

  async expectPurchasedProductShownInNodeApp(): Promise<void> {
    await this.openIomdBusiness();
    const productName = this.selectedProductName || "Snowboard";
    await this.firstVisibleElementWithSwipe(this.nodeProductSelectors(productName), `purchased product ${productName}`, 6);
  }

  async expectProductCanBeOrderedAgain(): Promise<void> {
    await this.openIomdBusiness();
    const productName = this.selectedProductName || "Snowboard";
    await this.clickFirstVisibleWithSwipe(this.nodeProductSelectors(productName), `purchased product ${productName}`, 8);
    await browser.pause(3000);
    await this.clickFirstVisibleWithSwipe([
      `//XCUIElementTypeStaticText[@name='  Buy again']`,
      `//*[contains(@name,'Buy again') or contains(@label,'Buy again') or contains(@name,'Buy Again') or contains(@label,'Buy Again')]`
    ], "Buy again control", 8);
  }

  async expectCheckoutContactFormVisible(): Promise<void> {
    await this.firstVisibleElement(this.checkoutEmailSelectors(), "checkout contact form");
  }

  async expectCheckoutContactFormNotVisible(): Promise<void> {
    await browser.pause(1000);
    const emailField = await this.maybeFirstVisibleElementNoWait(this.checkoutEmailSelectors());
    if (emailField) {
      throw new Error("Checkout contact form was visible even though the cart should be empty.");
    }
  }

  async expectNodeExtensionReadyForShopify(): Promise<void> {
    await this.grantSafariExtensionPermission();
    await this.openAnyAvailableProduct();
    if (!this.selectedProductName) {
      throw new Error("Node extension readiness check did not reach a Shopify product page.");
    }
  }

  async expectShopifyStoreLocked(): Promise<void> {
    await this.firstVisibleElement([
      `//XCUIElementTypeSecureTextField[@name='Enter store password']`,
      `//XCUIElementTypeSecureTextField[contains(@name,'password') or contains(@label,'password') or contains(@value,'password')]`,
      `//*[contains(@name,'Incorrect password') or contains(@label,'Incorrect password')]`,
      `//*[contains(@name,'Enter store password') or contains(@label,'Enter store password')]`
    ], "locked Shopify password screen");
  }

  async expectInvalidEmailValidation(): Promise<void> {
    await this.firstVisibleElementWithSwipe([
      `//*[contains(@name,'Enter a valid email') or contains(@label,'Enter a valid email') or contains(@value,'Enter a valid email')]`,
      `//*[contains(@name,'valid email') or contains(@label,'valid email') or contains(@value,'valid email')]`,
      `//*[contains(@name,'Enter a valid email or mobile phone number') or contains(@label,'Enter a valid email or mobile phone number')]`
    ], "invalid email validation", 4);
  }

  async expectRequiredAddressValidation(): Promise<void> {
    await this.firstVisibleElementWithSwipe([
      `//*[contains(@name,'Enter an address') or contains(@label,'Enter an address') or contains(@value,'Enter an address')]`,
      `//*[contains(@name,'Address is required') or contains(@label,'Address is required') or contains(@value,'Address is required')]`,
      `//*[contains(@name,'Enter a city') or contains(@label,'Enter a city') or contains(@value,'Enter a city')]`,
      `//*[contains(@name,'Enter a ZIP') or contains(@label,'Enter a ZIP') or contains(@value,'Enter a ZIP')]`
    ], "required address validation", 5);
  }

  async expectPaymentSecurityCodeValidation(): Promise<void> {
    await this.firstVisibleElementWithSwipe([
      `//*[contains(@name,'Enter the CVV') or contains(@label,'Enter the CVV') or contains(@value,'Enter the CVV')]`,
      `//*[contains(@name,'security code') or contains(@label,'security code') or contains(@value,'security code')]`,
      `//*[contains(@name,'CVV') or contains(@label,'CVV') or contains(@value,'CVV')]`
    ], "payment security code validation", 5);
  }

  async expectNodeOverlayDismissedAndBusinessSelectable(): Promise<void> {
    await this.dismissNodeCommerceTokenOverlay();
    await this.openIomdBusiness();
  }

  async expectFallbackProductSelectorsReady(): Promise<void> {
    const selectors = this.nodeProductSelectors("The Collection Snowboard: Liquid");
    if (!selectors.some((selector) => selector.includes("Snowboard"))) {
      throw new Error("Fallback product selectors do not include the stable Snowboard lookup.");
    }
  }

  private isIos(): boolean {
    return String(driver.capabilities.platformName ?? "").toLowerCase() === "ios";
  }

  private checkoutEmailSelectors(): string[] {
    return [
      `//XCUIElementTypeTextField[@name='Email or mobile phone number']`,
      `//XCUIElementTypeTextField[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email')]`,
      `//*[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email') or contains(@name,'mobile phone')]`
    ];
  }

  private nodeProductSelectors(productName: string): string[] {
    const normalizedProductName = productName.replace(/\s+/g, " ").trim();
    return [
      `//*[contains(@name, ${JSON.stringify(normalizedProductName)}) or contains(@label, ${JSON.stringify(normalizedProductName)})]`,
      `//*[contains(@name,'The Collection') or contains(@label,'The Collection')]`,
      `//*[contains(@name,'Snowboard') or contains(@label,'Snowboard')]`
    ];
  }

  private async withImplicitTimeout<T>(implicit: number, action: () => Promise<T>): Promise<T> {
    await browser.setTimeout({ implicit });
    try {
      return await action();
    } finally {
      await browser.setTimeout({ implicit: 10000 });
    }
  }

  private async clickIfVisible(selector: string): Promise<boolean> {
    return this.withImplicitTimeout(0, async () => {
      try {
        const elements = await $$(selector);
        for (const element of elements) {
          try {
            await element.click();
            return true;
          } catch {
            // Keep scanning optional controls.
          }
        }
      } catch {
        return false;
      }
      return false;
    });
  }

  private async clickByLabels(labels: string[]): Promise<boolean> {
    for (const label of labels) {
      const selector = this.isIos()
        ? `//*[@name=${JSON.stringify(label)} or @label=${JSON.stringify(label)} or contains(@name, ${JSON.stringify(label)}) or contains(@label, ${JSON.stringify(label)})]`
        : `//*[@text=${JSON.stringify(label)} or @content-desc=${JSON.stringify(label)} or contains(@text, ${JSON.stringify(label)})]`;
      if (await this.clickIfVisible(selector)) {
        return true;
      }
    }
    return false;
  }

  private async dismissPostOnboardingPrompts(): Promise<void> {
    for (const label of ["Next", "DO IT LATER", "Show me the magic", "OK, Got it", "Got it", "You are all set"]) {
      await this.clickByLabels([label]);
      await browser.pause(500);
    }
  }

  private async dismissNodeCommerceTokenOverlay(): Promise<void> {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      if (await this.clickIfVisible(`//XCUIElementTypeButton[contains(@name,'You are all set') or contains(@label,'You are all set')]`)) {
        await browser.pause(1200);
        return;
      }

      const hasCommerceOverlay = await this.maybeFirstVisibleElementNoWait([
        `//*[contains(@name,'Your Commerce Token') or contains(@label,'Your Commerce Token')]`,
        `//*[contains(@name,'is ready to use') or contains(@label,'is ready to use')]`,
        `//*[contains(@name,'You are all set') or contains(@label,'You are all set')]`,
        `//*[contains(@name,'Copy token') or contains(@label,'Copy token')]`
      ]);
      if (!hasCommerceOverlay) {
        return;
      }

      if (this.isIos()) {
        const size = await driver.getWindowSize();
        await driver.execute("mobile: tap", {
          x: Math.round(size.width * 0.5),
          y: Math.round(size.height * 0.84)
        });
        await browser.pause(1200);
      }
    }
  }

  private async openIomdBusiness(): Promise<void> {
    if (this.iomdBusinessOpened) {
      return;
    }
    await this.dismissNodeCommerceTokenOverlay();
    await this.clickFirstVisibleWithSwipe([
      `//XCUIElementTypeStaticText[@name='Iomdnewgen21']`,
      `//*[contains(@name,'Iomdnewgen21') or contains(@label,'Iomdnewgen21')]`
    ], "Iomdnewgen21 business", 8);
    this.iomdBusinessOpened = true;
    await browser.pause(3000);
  }

  private async firstVisibleElement(selectors: string[], description: string): Promise<WebdriverIO.Element> {
    for (const selector of selectors) {
      const elements = await $$(selector);
      for (const element of elements) {
        try {
          if (await element.isDisplayed()) {
            return element;
          }
        } catch {
          // Ignore stale/transient elements.
        }
      }
    }
    throw new Error(`Unable to find ${description}.`);
  }

  private async maybeFirstVisibleElement(selectors: string[]): Promise<WebdriverIO.Element | undefined> {
    try {
      return await this.firstVisibleElement(selectors, "optional element");
    } catch {
      return undefined;
    }
  }

  private async maybeFirstVisibleElementNoWait(selectors: string[]): Promise<WebdriverIO.Element | undefined> {
    const previousImplicit = await this.setImplicitTimeout(0);
    try {
      return await this.maybeFirstVisibleElement(selectors);
    } finally {
      await this.setImplicitTimeout(previousImplicit);
    }
  }

  private async setImplicitTimeout(milliseconds: number): Promise<number> {
    const currentTimeouts = await browser.getTimeouts();
    const previousImplicit = typeof currentTimeouts.implicit === "number" ? currentTimeouts.implicit : 0;
    await browser.setTimeout({ implicit: milliseconds });
    return previousImplicit;
  }

  private async swipeUp(): Promise<void> {
    try {
      await driver.execute("mobile: swipe", { direction: "up" });
    } catch {
      const size = await driver.getWindowSize();
      await driver.execute("mobile: dragFromToForDuration", {
        duration: 0.5,
        fromX: Math.round(size.width * 0.5),
        fromY: Math.round(size.height * 0.82),
        toX: Math.round(size.width * 0.5),
        toY: Math.round(size.height * 0.28)
      });
    }
  }

  private async firstVisibleElementWithSwipe(selectors: string[], description: string, attempts: number): Promise<WebdriverIO.Element> {
    for (let attempt = 0; attempt < attempts; attempt += 1) {
      const element = await this.maybeFirstVisibleElement(selectors);
      if (element) {
        return element;
      }
      await this.swipeUp();
      await browser.pause(700);
    }
    throw new Error(`Unable to find ${description} after ${attempts} swipe attempts.`);
  }

  private async clickFirstVisibleWithSwipe(selectors: string[], description: string, attempts: number): Promise<void> {
    const element = await this.firstVisibleElementWithSwipe(selectors, description, attempts);
    await element.click();
  }

  private async typeFirstVisible(selectors: string[], value: string, description: string): Promise<void> {
    const element = await this.firstVisibleElement(selectors, description);
    await element.click();
    await element.clearValue();
    await element.setValue(value);
  }

  private async typeFirstVisibleWithSwipe(selectors: string[], value: string, description: string, attempts: number): Promise<void> {
    const element = await this.firstVisibleElementWithSwipe(selectors, description, attempts);
    await element.click();
    await element.setValue(value);
  }

  private async typeTextFieldWithSwipe(selectors: string[], value: string, description: string, attempts: number): Promise<void> {
    const element = await this.firstVisibleElementWithSwipe(selectors, description, attempts);
    const type = String(await element.getAttribute("type")).toLowerCase();
    if (type && !type.includes("textfield") && !type.includes("edittext")) {
      throw new Error(`Unable to type ${description}: matched non-editable element type ${type}.`);
    }
    await element.click();
    await element.clearValue();
    await element.setValue(value);
  }

  private async typeOptionalVisibleWithSwipe(selectors: string[], value: string, description: string, attempts: number): Promise<boolean> {
    try {
      const element = await this.firstVisibleElementWithSwipe(selectors, description, attempts);
      await element.click();
      await element.clearValue();
      await element.setValue(value);
      return true;
    } catch {
      return false;
    }
  }

  private async typeOptionalTextFieldWithSwipe(selectors: string[], value: string, description: string, attempts: number): Promise<boolean> {
    try {
      const element = await this.optionalVisibleElementWithSwipe(selectors, attempts);
      if (!element) {
        return false;
      }
      const type = String(await element.getAttribute("type")).toLowerCase();
      if (type && !type.includes("textfield") && !type.includes("edittext")) {
        return false;
      }
      await element.click();
      await element.clearValue();
      await element.setValue(value);
      return true;
    } catch {
      return false;
    }
  }

  private async optionalVisibleElementWithSwipe(selectors: string[], attempts: number): Promise<WebdriverIO.Element | undefined> {
    for (let attempt = 0; attempt < attempts; attempt += 1) {
      const element = await this.maybeFirstVisibleElementNoWait(selectors);
      if (element) {
        return element;
      }
      await this.swipeUp();
      await browser.pause(500);
    }
    return undefined;
  }

  private async getElementText(element: WebdriverIO.Element): Promise<string> {
    for (const attribute of ["name", "label", "value"]) {
      const value = String((await element.getAttribute(attribute)) ?? "").trim();
      if (value) {
        return value;
      }
    }
    return "";
  }

  private async closeKeyboardIfVisible(): Promise<void> {
    if (await this.clickIfVisible(`//*[@name='Done' or @label='Done']`)) {
      return;
    }
    try {
      await driver.hideKeyboard();
    } catch {
      // Keyboard may already be hidden.
    }
  }

  private async openSafariManageExtensions(): Promise<void> {
    await this.firstVisibleElement([`~PageFormatMenuButton`, `//*[@name='PageFormatMenuButton']`], "Safari page menu button").then((element) => element.click());
    await this.clickFirstVisibleWithSwipe([
      `//*[@name='Manage Extensions' or @label='Manage Extensions']`,
      `//*[@name='ManageExtensions' or @label='ManageExtensions']`,
      `//*[contains(@name,'Manage') and contains(@name,'Extension')]`,
      `//*[contains(@label,'Manage') and contains(@label,'Extension')]`,
      `//*[contains(@name,'Extensions') or contains(@label,'Extensions')]`
    ], "Safari Manage Extensions menu item", 4);
  }

  private async handleSafariExtensionPermissionReview(useCoordinateFallback = false): Promise<void> {
    if (!(await this.clickByLabels(["Review"]))) {
      if (!useCoordinateFallback) {
        return;
      }
      await driver.execute("mobile: tap", { x: 1015, y: 260 });
      await browser.pause(1000);
    }
    await this.clickByLabels(["Always Allow on Every Website", "Always Allow", "Allow"]);
    await this.clickByLabels(["Done", "OK"]);
    await browser.pause(1000);
  }

  private async grantSafariExtensionPermission(): Promise<void> {
    if (this.safariExtensionPermissionGranted) {
      return;
    }

    if (await this.acceptSafariPermissionPrompt()) {
      this.safariExtensionPermissionGranted = true;
      return;
    }

    await this.openSafariExtensionMenuIfPossible();
    if (await this.acceptSafariPermissionPrompt()) {
      this.safariExtensionPermissionGranted = true;
      return;
    }

    if (await this.grantSafariExtensionPermissionInSettings()) {
      this.safariExtensionPermissionGranted = true;
      return;
    }
    if (this.isIos()) {
      await driver.activateApp(env.ios.safariBundleId);
      await browser.pause(1200);
    }
    this.safariExtensionPermissionGranted = await this.acceptSafariPermissionPrompt();
  }

  private async acceptSafariPermissionPrompt(): Promise<boolean> {
    const clickedReview = await this.clickByLabels(["Review"]);
    if (!clickedReview) {
      await this.clickByLabels(["node.", "node", "IOMDAutofill"]);
    }

    const allowed = await this.clickByLabels([
      "Always Allow on Every Website",
      "Always Allow on This Website",
      "Always Allow",
      "Allow on Every Website",
      "Allow"
    ]);
    await this.clickByLabels(["Done", "OK"]);
    await browser.pause(1000);
    return allowed;
  }

  private async openSafariExtensionMenuIfPossible(): Promise<void> {
    try {
      const menu = await this.firstVisibleElement([`~PageFormatMenuButton`, `//*[@name='PageFormatMenuButton']`], "Safari page menu button");
      await menu.click();
      await browser.pause(700);
      await this.clickByLabels(["node.", "node", "IOMDAutofill", "Manage Extensions"]);
      await browser.pause(700);
    } catch {
      // The page menu is not always visible while Safari is still transitioning.
    }
  }

  private async grantSafariExtensionPermissionInSettings(): Promise<boolean> {
    if (!this.isIos()) {
      return false;
    }
    try {
      await driver.activateApp(env.ios.settingsBundleId);
      await browser.pause(1200);
      await this.clickByLabels(["Apps"]);
      await this.clickByLabels(["Safari"]);
      await this.clickByLabels(["Extensions"]);
      await this.clickByLabels(["node.", "node", "IOMDAutofill"]);
      await this.clickIfVisible(`//XCUIElementTypeSwitch[@value='0']`);
      await this.clickByLabels(["All Websites", "All websites", "iomdnewgen21.myshopify.com"]);
      const allowed = await this.clickByLabels(["Allow"]);
      await browser.pause(1000);
      if (allowed) {
        await driver.activateApp(env.ios.safariBundleId);
        await browser.pause(1200);
      }
      return allowed;
    } catch {
      // Keep the Safari banner/menu permission path as the primary route.
      return false;
    }
  }

  private async closeShopifyDrawerIfOpen(): Promise<void> {
    await this.clickByLabels(["Close", "Close menu"]);
    if (this.isIos()) {
      await driver.execute("mobile: tap", { x: 75, y: 420 });
    }
    await browser.pause(1000);
  }

  private async continueToPaymentIfNeeded(): Promise<void> {
    for (let attempt = 0; attempt < 8; attempt += 1) {
      const paymentField = await this.maybeFirstVisibleElement([
        `//*[contains(@name,'Card number') or contains(@label,'Card number') or contains(@value,'Card number')]`,
        `//*[contains(@name,'Payment') or contains(@label,'Payment')]`
      ]);
      if (paymentField) {
        return;
      }
      if (await this.clickByLabels(["Continue to payment", "Continue to shipping", "Continue", "Review order"])) {
        await browser.pause(1800);
        continue;
      }
      await this.swipeUp();
    }
  }

  private async completeRemainingShippingFields(): Promise<void> {
    await this.typeOptionalTextFieldWithSwipe([
      `//XCUIElementTypeTextField[@name='City']`,
      `//XCUIElementTypeTextField[contains(@name,'City') or contains(@label,'City') or contains(@value,'City')]`
    ], testData.personalCity, "city field", 5);

    await this.selectCheckoutStateIfNeeded();

    await this.typeOptionalTextFieldWithSwipe([
      `//XCUIElementTypeTextField[@name='ZIP code']`,
      `//XCUIElementTypeTextField[@name='ZIP / postal code']`,
      `//XCUIElementTypeTextField[contains(@name,'ZIP') or contains(@label,'ZIP') or contains(@value,'ZIP') or contains(@name,'postal') or contains(@label,'postal') or contains(@value,'postal')]`
    ], testData.personalZipCode, "zip field", 5);

    await this.closeKeyboardIfVisible();
  }

  private async selectCheckoutStateIfNeeded(): Promise<void> {
    const stateControl = await this.optionalVisibleElementWithSwipe([
      `//XCUIElementTypeButton[@name='State' or @label='State' or contains(@name,'State') or contains(@label,'State')]`,
      `//XCUIElementTypeButton[@name='State / province' or @label='State / province']`,
      `//XCUIElementTypeOther[@name='State' or @label='State' or contains(@name,'State') or contains(@label,'State')]`
    ], 5);
    if (!stateControl) {
      return;
    }
    await stateControl.click();
    await browser.pause(800);
    if (!(await this.clickByLabels([testData.personalState, testData.personalStateShort]))) {
      await this.clickFirstVisibleWithSwipe([
        `//*[contains(@name,'${testData.personalState}') or contains(@label,'${testData.personalState}')]`,
        `//*[contains(@name,'${testData.personalStateShort}') or contains(@label,'${testData.personalStateShort}')]`
      ], "state option", 5);
    }
  }

  private async clickContinueCheckout(): Promise<void> {
    if (await this.clickByLabels(["Continue to payment", "Continue to shipping", "Continue", "Review order"])) {
      return;
    }
    await this.clickFirstVisibleWithSwipe([
      `//*[@name='Continue' or @label='Continue']`,
      `//*[contains(@name,'Continue') or contains(@label,'Continue')]`,
      `//*[contains(@name,'Review order') or contains(@label,'Review order')]`
    ], "checkout continue button", 5);
  }

  private async expectShippingAddressAccepted(): Promise<void> {
    const errors = [
      "Enter a city",
      "Select a state",
      "Select a state / province",
      "Enter a ZIP",
      "Enter a ZIP / postal code",
      "Enter a postal code"
    ];
    for (const error of errors) {
      const visible = await this.maybeFirstVisibleElementNoWait([
        `//*[contains(@name,${JSON.stringify(error)}) or contains(@label,${JSON.stringify(error)}) or contains(@value,${JSON.stringify(error)})]`
      ]);
      if (visible) {
        throw new Error(`Shipping address validation failed: ${error}`);
      }
    }
  }

  private async clickWebOrNative(labels: string[], nativeSelectors: string[], description: string): Promise<void> {
    const clicked = await this.clickWebOrNativeOptional(labels, nativeSelectors, description);
    if (!clicked) {
      throw new Error(`Unable to find ${description}.`);
    }
  }

  private async clickWebOrNativeOptional(labels: string[], nativeSelectors: string[], description: string): Promise<boolean> {
    const clickedInWebContext = await this.clickMatchingWebElement(labels);
    if (clickedInWebContext) {
      return true;
    }
    return this.clickVisibleOrPresentWithSwipe(nativeSelectors, description, 3);
  }

  private async clickVisibleOrPresentWithSwipe(selectors: string[], description: string, attempts: number): Promise<boolean> {
    return this.withImplicitTimeout(0, async () => {
      for (let attempt = 0; attempt < attempts; attempt += 1) {
        for (const selector of selectors) {
          const elements = await $$(selector);
          for (const element of elements) {
            try {
              if (await element.isDisplayed()) {
                await element.click();
                return true;
              }

              const location = await element.getLocation();
              const size = await element.getSize();
              if (size.width > 0 && size.height > 0) {
                if (this.isIos() && location.y > 650) {
                  await this.swipeUp();
                  await browser.pause(700);
                  continue;
                }
                await driver.execute("mobile: tap", {
                  x: Math.round(location.x + size.width / 2),
                  y: Math.round(location.y + size.height / 2)
                });
                return true;
              }
            } catch {
              // Try the next candidate.
            }
          }
        }
        await this.swipeUp();
        await browser.pause(700);
      }
      return false;
    });
  }

  private async openShopifyCheckoutDirectly(): Promise<void> {
    const baseUrl = this.shopifyBaseUrl();
    await browser.url(`${baseUrl}/cart`);
    await browser.pause(2000);
    const clickedFromCart = await this.clickWebOrNativeOptional(["Check out", "Checkout", "CHECK OUT"], [
      `//*[@name='Check out' or @label='Check out' or @name='CHECK OUT']`,
      `//*[contains(@name,'Check out') or contains(@label,'Check out') or contains(@name,'Checkout') or contains(@label,'Checkout')]`
    ], "checkout button from cart");
    if (!clickedFromCart) {
      await browser.url(`${baseUrl}/checkout`);
      await browser.pause(4000);
    }
  }

  private async addKnownVariantAndOpenCheckout(): Promise<boolean> {
    const variantId = process.env.SHOPIFY_VARIANT_ID || this.defaultVariantId;
    if (!variantId) {
      return false;
    }

    const baseUrl = this.shopifyBaseUrl();
    this.selectedProductName = process.env.SHOPIFY_PRODUCT_NAME || this.selectedProductName || this.defaultProductName;
    await browser.url(`${baseUrl}/cart/clear`);
    await browser.pause(1000);
    await browser.url(`${baseUrl}/cart/add?id=${encodeURIComponent(variantId)}&quantity=1`);
    await browser.pause(2500);
    return this.openCheckoutFromCartOrDirect(baseUrl);
  }

  private async openCheckoutFromCartOrDirect(baseUrl: string): Promise<boolean> {
    const clickedFromCart = await this.clickWebOrNativeOptional(["Check out", "Checkout", "CHECK OUT"], [
      `//*[@name='Check out' or @label='Check out' or @name='CHECK OUT']`,
      `//*[contains(@name,'Check out') or contains(@label,'Check out') or contains(@name,'Checkout') or contains(@label,'Checkout')]`
    ], "checkout button from variant cart");
    if (clickedFromCart) {
      await browser.pause(5000);
      return true;
    }

    await browser.url(`${baseUrl}/checkout`);
    await browser.pause(5000);
    return true;
  }

  private async ensureCheckoutContactFormReady(): Promise<void> {
    const emailField = await this.maybeFirstVisibleElement([
      `//XCUIElementTypeTextField[@name='Email or mobile phone number']`,
      `//XCUIElementTypeTextField[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email')]`,
      `//*[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email') or contains(@name,'mobile phone')]`
    ]);
    if (emailField) {
      return;
    }

    const baseUrl = this.shopifyBaseUrl();
    await this.addKnownVariantAndOpenCheckout();
    await browser.pause(4000);
    if (await this.maybeFirstVisibleElement([
      `//XCUIElementTypeTextField[@name='Email or mobile phone number']`,
      `//XCUIElementTypeTextField[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email')]`,
      `//*[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email') or contains(@name,'mobile phone')]`
    ])) {
      return;
    }

    await browser.url(`${baseUrl}/cart/${encodeURIComponent(process.env.SHOPIFY_VARIANT_ID || this.defaultVariantId)}:1`);
    await browser.pause(2500);
    await this.openCheckoutFromCartOrDirect(baseUrl);
  }

  private shopifyBaseUrl(): string {
    return (process.env.SHOPIFY_STOREFRONT_URL || this.defaultStorefrontUrl).replace(/\/+$/, "");
  }

  private async selectFirstAvailableProduct(): Promise<void> {
    const selected = await this.clickFirstProductInWebContext();
    if (selected) {
      this.selectedProductName = selected.name;
      await browser.pause(3000);
      return;
    }

    const productElement = await this.firstNativeProductElementWithSwipe(8);
    this.selectedProductName = await this.getElementText(productElement) || "Snowboard";
    await productElement.click();
    if (!this.selectedProductName) {
      this.selectedProductName = "Snowboard";
    }
    await browser.pause(3000);
  }

  private async clickFirstProductInWebContext(): Promise<{ name: string; href: string } | undefined> {
    try {
      const script = `
        const links = Array.from(document.querySelectorAll('a[href*="/products/"]'));
        const product = links
          .map((link) => ({
            name: (link.textContent || link.getAttribute('aria-label') || '').replace(/\\s+/g, ' ').trim(),
            href: link.href
          }))
          .find((item) => item.href && item.name && item.name.length > 2);
        if (!product) {
          return null;
        }
        window.location.href = product.href;
        return product;
      `;
      const product = await browser.execute(script);
      if (!product || typeof product !== "object") {
        return undefined;
      }
      const candidate = product as { name?: unknown; href?: unknown };
      const name = String(candidate.name ?? "").trim();
      const href = String(candidate.href ?? "").trim();
      return name && href ? { name, href } : undefined;
    } catch {
      return undefined;
    }
  }

  private async readCurrentProductName(): Promise<string> {
    try {
      const name = await browser.execute(`
        const heading = document.querySelector('h1,[data-product-title],.product__title');
        return heading ? heading.textContent.replace(/\\s+/g, ' ').trim() : '';
      `);
      const productName = String(name ?? "").trim();
      if (productName) {
        return productName;
      }
    } catch {
      // Native context fallback below.
    }

    return this.selectedProductName || this.defaultProductName;
  }

  private async firstNativeProductElementWithSwipe(attempts: number): Promise<WebdriverIO.Element> {
    for (let attempt = 0; attempt < attempts; attempt += 1) {
      const elements = await $$(`//*[contains(@name,'Snowboard') or contains(@label,'Snowboard') or contains(@name,'Product') or contains(@label,'Product')]`);
      for (const element of elements) {
        try {
          if (!(await element.isDisplayed())) {
            continue;
          }
          const text = (await this.getElementText(element)).toLowerCase();
          const looksLikeProductName = text.includes("snowboard") && !text.includes("vendor") && !text.includes("$");
          if (looksLikeProductName) {
            return element;
          }
        } catch {
          // Keep scanning.
        }
      }
      await this.swipeUp();
      await browser.pause(700);
    }
    return this.firstVisibleElementWithSwipe([
      `//*[contains(@name,'Snowboard') or contains(@label,'Snowboard')]`,
      `//*[contains(@name,'Product') or contains(@label,'Product')]`
    ], "available product", 3);
  }

  private async clickMatchingWebElement(labels: string[]): Promise<boolean> {
    try {
      const script = `
        const labels = arguments[0].map((label) => String(label).toLowerCase());
        const nodes = Array.from(document.querySelectorAll('button,input,a,[role="button"]'));
        const target = nodes.find((node) => {
          const text = [node.textContent, node.getAttribute('value'), node.getAttribute('aria-label'), node.getAttribute('name')]
            .filter(Boolean)
            .join(' ')
            .trim()
            .toLowerCase();
          return labels.some((label) => text.includes(label));
        });
        if (!target) {
          return false;
        }
        target.scrollIntoView({ block: 'center', inline: 'center' });
        target.click();
        return true;
      `;
      return Boolean(await browser.execute(script, labels));
    } catch {
      return false;
    }
  }
}

export const codegenBuyAgainPage = new CodegenBuyAgainPage();
