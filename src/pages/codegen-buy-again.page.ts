import { env } from "../config/env";
import { testData } from "../data/test-data";
import { codegenOnboardingPage } from "./codegen-onboarding.page";

export class CodegenBuyAgainPage {
  private readonly defaultStorefrontUrl = "https://iomdnewgen21.myshopify.com/";
  private readonly defaultCollectionUrl = "https://iomdnewgen21.myshopify.com/collections/all";
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
    await browser.url(process.env.SHOPIFY_PRODUCT_URL || this.defaultCollectionUrl);
    await browser.pause(3000);
    await this.grantSafariExtensionPermission();
    await this.closeShopifyDrawerIfOpen();
    if (!process.env.SHOPIFY_PRODUCT_URL) {
      await this.selectFirstAvailableProduct();
    } else {
      this.selectedProductName = await this.readCurrentProductName();
    }
  }

  async addProductToCartAndStartCheckout(): Promise<void> {
    await this.closeShopifyDrawerIfOpen();
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
    this.iomdBusinessOpened = false;
    await browser.pause(3000);
  }

  async expectPurchasedProductShownInNodeApp(): Promise<void> {
    await this.openIomdBusiness();
    const productName = this.selectedProductName || "Snowboard";
    await browser.waitUntil(
      async () => {
        const source = await driver.getPageSource();
        return source.toLowerCase().includes(productName.toLowerCase());
      },
      {
        timeout: 30000,
        timeoutMsg: `Expected purchased product "${productName}" to be visible in the node app`
      }
    );
  }

  async expectProductCanBeOrderedAgain(): Promise<void> {
    await this.openIomdBusiness();
    const productName = this.selectedProductName || "Snowboard";
    await this.clickFirstVisibleWithSwipe([
      `//*[contains(@name, ${JSON.stringify(productName)}) or contains(@label, ${JSON.stringify(productName)})]`,
      `//*[contains(@name,'Snowboard') or contains(@label,'Snowboard')]`
    ], `purchased product ${productName}`, 8);
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

  private async openIomdBusiness(): Promise<void> {
    if (this.iomdBusinessOpened) {
      return;
    }
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
    const baseUrl = (process.env.SHOPIFY_STOREFRONT_URL || this.defaultStorefrontUrl).replace(/\/+$/, "");
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

    try {
      const source = await driver.getPageSource();
      const match = source.match(/The [^"<]+Snowboard/i);
      return match?.[0] ?? (this.selectedProductName || "Snowboard");
    } catch {
      return this.selectedProductName || "Snowboard";
    }
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
