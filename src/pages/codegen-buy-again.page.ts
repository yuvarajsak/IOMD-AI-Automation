import { env } from "../config/env";
import { testData } from "../data/test-data";
import { codegenOnboardingPage } from "./codegen-onboarding.page";

export class CodegenBuyAgainPage {
  private readonly defaultStorefrontUrl = "https://iomdnewgen21.myshopify.com/";
  private readonly defaultProductUrl = "https://iomdnewgen21.myshopify.com/products/the-compare-at-price-snowboard";

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
    await this.handleSafariExtensionPermissionReview(true);
  }

  async openShopifyProductPage(): Promise<void> {
    await this.handleSafariExtensionPermissionReview();
    await browser.url(process.env.SHOPIFY_PRODUCT_URL || this.defaultProductUrl);
    await browser.pause(3000);
    await this.handleSafariExtensionPermissionReview();
    await this.closeShopifyDrawerIfOpen();
  }

  async addProductToCartAndStartCheckout(): Promise<void> {
    await this.closeShopifyDrawerIfOpen();
    await this.clickWebOrNative(["Add to cart", "ADD TO CART"], [
      `//*[@name='Add to cart' or @label='Add to cart']`,
      `//*[contains(@name,'Add to cart') or contains(@label,'Add to cart') or contains(@name,'add to cart') or contains(@label,'add to cart')]`
    ], "Add to cart button");
    await browser.pause(2000);
    await this.clickWebOrNative(["Check out", "Checkout", "CHECK OUT"], [
      `//*[@name='Check out' or @label='Check out' or @name='CHECK OUT']`,
      `//*[contains(@name,'Check out') or contains(@label,'Check out') or contains(@name,'Checkout') or contains(@label,'Checkout')]`
    ], "checkout button");
  }

  async completeCheckoutContactDetails(): Promise<void> {
    const email = `qa_test${Date.now()}@mail.com`;
    await this.typeFirstVisible([
      `//XCUIElementTypeTextField[@name='Email or mobile phone number']`,
      `//*[contains(@name,'Email') or contains(@label,'Email') or contains(@value,'Email')]`
    ], email, "checkout email field");
    await this.typeFirstVisible([`//XCUIElementTypeTextField[@name='First name (optional)']`, `//*[contains(@name,'First name')]`], testData.personalFirstName, "first name field");
    await this.typeFirstVisible([`//XCUIElementTypeTextField[@name='Last name']`, `//*[contains(@name,'Last name')]`], testData.personalLastName, "last name field");
    const addressField = await this.firstVisibleElement([`//XCUIElementTypeTextField[@name='Address']`, `//*[contains(@name,'Address') or contains(@label,'Address')]`], "address field");
    await addressField.click();
    await addressField.clearValue();
    for (const character of "670 White") {
      await addressField.addValue(character);
      await browser.pause(100);
    }
    await browser.pause(2500);
    if (this.isIos()) {
      await driver.execute("mobile: tap", { x: 160, y: 323 });
    }
    await this.closeKeyboardIfVisible();
  }

  async enterPaymentDetails(): Promise<void> {
    await this.continueToPaymentIfNeeded();
    await this.typeFirstVisibleWithSwipe([`//*[@name='Card number' or contains(@value,'Card number') or contains(@label,'Card number')]`], process.env.SHOPIFY_TEST_CARD_NUMBER || "1", "card number field", 8);
    const future = new Date();
    future.setMonth(future.getMonth() + Math.floor(Math.random() * 60) + 1);
    const expiry = `${String(future.getMonth() + 1).padStart(2, "0")}/${future.getFullYear()}`;
    await this.typeFirstVisibleWithSwipe([`//*[@name='Expiration date' or contains(@value,'Expiration date') or contains(@label,'Expiration date')]`], expiry, "expiration date field", 5);
    await this.typeFirstVisibleWithSwipe([`//*[@name='Security code' or contains(@value,'Security code') or contains(@label,'Security code')]`], String(Math.floor(100 + Math.random() * 900)), "security code field", 5);
    await this.closeKeyboardIfVisible();
  }

  async submitOrder(): Promise<void> {
    await this.clickFirstVisibleWithSwipe([`~Pay now`, `//*[@name='Pay now' or @label='Pay now' or contains(@name,'Pay now')]`], "Pay now button", 8);
  }

  async trackOrderFromThankYouPage(): Promise<void> {
    await this.clickFirstVisibleWithSwipe([
      `//XCUIElementTypeButton[contains(@name,'Track My Order') or contains(@label,'Track My Order')]`,
      `//*[contains(@name,'Track My Order') or contains(@label,'Track My Order')]`
    ], "Track My Order button", 10);
  }

  async returnToIomdApp(): Promise<void> {
    await driver.activateApp(env.apps.iomdBundleId);
    await browser.pause(3000);
  }

  async expectProductCanBeOrderedAgain(): Promise<void> {
    await this.clickFirstVisibleWithSwipe([
      `//XCUIElementTypeStaticText[@name='Iomdnewgen21']`,
      `//*[contains(@name,'Iomdnewgen21') or contains(@label,'Iomdnewgen21')]`
    ], "Iomdnewgen21 business", 8);
    await browser.pause(3000);
    await this.clickFirstVisibleWithSwipe([
      `(//XCUIElementTypeStaticText[@name='The Compare at Price Snowboard'])[1]`,
      `//*[contains(@name,'The Compare at Price Snowboard') or contains(@label,'The Compare at Price Snowboard')]`,
      `//*[contains(@name,'Snowboard') or contains(@label,'Snowboard')]`
    ], "Buy Again product", 8);
    await browser.pause(3000);
    await this.clickFirstVisibleWithSwipe([
      `//XCUIElementTypeStaticText[@name='  Buy again']`,
      `//*[contains(@name,'Buy again') or contains(@label,'Buy again') or contains(@name,'Buy Again') or contains(@label,'Buy Again')]`
    ], "Buy again control", 8);
  }

  private isIos(): boolean {
    return String(driver.capabilities.platformName ?? "").toLowerCase() === "ios";
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
    for (const label of ["Next", "DO IT LATER", "Show me the magic", "OK, Got it", "Got it"]) {
      await this.clickByLabels([label]);
      await browser.pause(500);
    }
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

  private async clickWebOrNative(labels: string[], nativeSelectors: string[], description: string): Promise<void> {
    const clickedInWebContext = await this.clickMatchingWebElement(labels);
    if (clickedInWebContext) {
      return;
    }
    await this.clickFirstVisibleWithSwipe(nativeSelectors, description, 8);
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
