export class CodegenOnboardingPage {
  private readonly splashContinueSelectors = [
    "//XCUIElementTypeOther/XCUIElementTypeButton",
    "//*[@name='Continue' or @label='Continue' or contains(@name,'Continue') or contains(@label,'Continue')]",
    "//*[@text='Continue' or @content-desc='Continue' or contains(@text,'Continue') or contains(@content-desc,'Continue')]",
    "//*[@clickable='true' and (@class='android.widget.Button' or contains(@class,'View'))]"
  ];

  private readonly skipGmailSelectors = [
    "//*[@name='Skip' or @label='Skip']",
    "//*[@text='Skip' or @content-desc='Skip']"
  ];
  private readonly connectGmailSelectors = [
    "//*[contains(@name,'Connect Gmail') or contains(@label,'Connect Gmail')]",
    "//*[contains(@text,'Connect Gmail') or contains(@content-desc,'Connect Gmail')]"
  ];
  private readonly createTokenHeadingSelectors = [
    "//*[contains(@name,'Create your Commerce Token') or contains(@label,'Create your Commerce Token')]",
    "//*[contains(@text,'Create your Commerce Token') or contains(@content-desc,'Create your Commerce Token')]"
  ];
  private readonly createTokenSubtitleSelectors = [
    "//*[contains(@name,'Change the way you do commerce') or contains(@label,'Change the way you do commerce')]",
    "//*[contains(@text,'Change the way you do commerce') or contains(@content-desc,'Change the way you do commerce')]"
  ];
  private readonly tokenInputSelectors = [
    "//XCUIElementTypeTextField",
    "//android.widget.EditText"
  ];
  private readonly createButtonSelectors = [
    "//*[@name='Create' or @label='Create' or @name='Create ✦' or @label='Create ✦']",
    "//XCUIElementTypeButton[contains(@name,'Create') or contains(@label,'Create')]",
    "//*[@class='android.widget.Button' and (contains(@text,'Create') or contains(@content-desc,'Create'))]",
    "//*[contains(@text,'Create') or contains(@content-desc,'Create')]"
  ];
  private readonly alreadyNodeUserSelectors = [
    "//*[contains(@name,'Already a Node user') or contains(@label,'Already a Node user')]",
    "//*[contains(@text,'Already a Node user') or contains(@content-desc,'Already a Node user')]"
  ];
  private readonly helperTextSelectors = [
    "//*[contains(@name,'Use 4+ characters') or contains(@label,'Use 4+ characters')]",
    "//*[contains(@text,'Use 4+ characters') or contains(@content-desc,'Use 4+ characters')]"
  ];
  private readonly loadingStateSelectors = [
    "//*[contains(@name,'Just a moment') or contains(@label,'Just a moment')]",
    "//*[contains(@name,'Creating token') or contains(@label,'Creating token')]",
    "//*[contains(@text,'Just a moment') or contains(@content-desc,'Just a moment')]",
    "//*[contains(@text,'Creating token') or contains(@content-desc,'Creating token')]"
  ];
  private readonly postCreateSuccessSelectors = [
    "//*[contains(@name,'Your Commerce Token') or contains(@label,'Your Commerce Token')]",
    "//*[contains(@name,'is ready to use') or contains(@label,'is ready to use')]",
    "//*[contains(@name,'You are all set') or contains(@label,'You are all set')]",
    "//*[contains(@name,'Copy token') or contains(@label,'Copy token')]",
    "//*[contains(@text,'Your Commerce Token') or contains(@content-desc,'Your Commerce Token')]",
    "//*[contains(@text,'is ready to use') or contains(@content-desc,'is ready to use')]",
    "//*[contains(@text,'You are all set') or contains(@content-desc,'You are all set')]",
    "//*[contains(@text,'Copy token') or contains(@content-desc,'Copy token')]"
  ];
  private readonly createFailureSelectors = [
    "//*[contains(@name,'already') or contains(@label,'already') or contains(@name,'failed') or contains(@label,'failed') or contains(@name,'error') or contains(@label,'error')]",
    "//*[contains(@text,'already') or contains(@content-desc,'already') or contains(@text,'failed') or contains(@content-desc,'failed') or contains(@text,'error') or contains(@content-desc,'error')]"
  ];

  async launchFresh(): Promise<void> {
    await driver.launchApp();
    await driver.setTimeout({ implicit: 5000 });
  }

  async continueFromSplash(): Promise<void> {
    if (await this.isAnyVisible(this.createTokenHeadingSelectors)) {
      return;
    }
    if (await this.isAnyPresent(this.connectGmailSelectors)) {
      return;
    }
    await this.clickFirstVisible(this.splashContinueSelectors, "splash continue control");
  }

  async skipGmailImport(): Promise<void> {
    if (await this.isAnyVisible(this.createTokenHeadingSelectors)) {
      return;
    }
    await this.waitForAnyPresent(this.connectGmailSelectors, "Connect Gmail CTA");
    await this.clickFirstVisible(this.skipGmailSelectors, "Skip Gmail control");
  }

  async expectCreateTokenVisible(): Promise<void> {
    await this.waitForAnyVisible(this.createTokenHeadingSelectors, "Create Commerce Token heading");
    await this.waitForAnyVisible(this.tokenInputSelectors, "commerce token input");
  }

  async expectCreateTokenControlsVisible(): Promise<void> {
    await this.expectCreateTokenVisible();
    await this.waitForAnyVisible(this.createTokenSubtitleSelectors, "create token subtitle");
    await this.waitForAnyVisible(this.createButtonSelectors, "Create token button");
    await this.waitForAnyVisible(this.alreadyNodeUserSelectors, "Already a Node user link");
  }

  async expectCreateTokenHelperTextVisible(): Promise<void> {
    await this.waitForAnyVisible(this.helperTextSelectors, "create token helper text");
  }

  async enterCommerceToken(prefix: string): Promise<void> {
    await this.expectCreateTokenVisible();
    const field = await this.firstVisible(this.tokenInputSelectors, "commerce token input");
    await field.click();
    await field.clearValue();
    await field.setValue(prefix);
  }

  async enterUniqueCommerceToken(): Promise<string> {
    const prefix = `codex${Date.now().toString(36).slice(-8)}`.slice(0, 25);
    await this.enterCommerceToken(prefix);
    return prefix;
  }

  async expectCommerceTokenValue(prefix: string): Promise<void> {
    const field = await this.firstVisible(this.tokenInputSelectors, "commerce token input");
    await browser.waitUntil(
      async () => {
        const value = String((await field.getAttribute("value")) ?? "");
        return value.includes(prefix);
      },
      {
        timeout: 5000,
        timeoutMsg: `Expected commerce token input to contain ${prefix}`
      }
    );
  }

  async submitCommerceToken(): Promise<void> {
    await this.expectCreateTokenControlsVisible();
    await this.dismissKeyboardIfOpen();
    await this.clickFirstVisible(this.createButtonSelectors, "Create token button");
  }

  async expectTokenCreationProgress(): Promise<void> {
    await browser.waitUntil(
      async () => (await this.isAnyVisible(this.loadingStateSelectors)) || (await this.isAnyVisible(this.postCreateSuccessSelectors)),
      {
        timeout: 45000,
        timeoutMsg: "Expected token creation loading or success state"
      }
    );
  }

  async expectPostCreateSuccess(): Promise<void> {
    await browser.waitUntil(
      async () => {
        if (await this.isAnyVisible(this.postCreateSuccessSelectors)) {
          return true;
        }
        if (await this.isAnyVisible(this.createFailureSelectors)) {
          throw new Error("Create token flow displayed a failure state");
        }
        return false;
      },
      {
        timeout: 60000,
        timeoutMsg: "Expected post-create Commerce Token success state"
      }
    );
  }

  private async waitForAnyVisible(selectors: string[], description: string): Promise<void> {
    await browser.waitUntil(
      async () => {
        return this.isAnyVisible(selectors);
      },
      {
        timeout: 20000,
        timeoutMsg: `Expected ${description} to be visible`
      }
    );
  }

  private async waitForAnyPresent(selectors: string[], description: string): Promise<void> {
    await browser.waitUntil(
      async () => {
        return this.isAnyPresent(selectors);
      },
      {
        timeout: 20000,
        timeoutMsg: `Expected ${description} to be present`
      }
    );
  }

  private async isAnyVisible(selectors: string[]): Promise<boolean> {
    return this.withZeroImplicitTimeout(async () => {
      for (const selector of selectors) {
        const elements = await $$(selector);
        for (const element of elements) {
          try {
            if (await element.isDisplayed()) {
              return true;
            }
          } catch {
            // Keep polling through stale elements.
          }
        }
      }
      return false;
    });
  }

  private async isAnyPresent(selectors: string[]): Promise<boolean> {
    return this.withZeroImplicitTimeout(async () => {
      for (const selector of selectors) {
        const elements = await $$(selector);
        if ((await elements.length) > 0) {
          return true;
        }
      }
      return false;
    });
  }

  private async firstVisible(selectors: string[], description: string): Promise<WebdriverIO.Element> {
    for (const selector of selectors) {
      const elements = await $$(selector);
      for (const element of elements) {
        try {
          if (await element.isDisplayed()) {
            return element;
          }
        } catch {
          // Keep scanning through stale elements.
        }
      }
    }
    throw new Error(`Unable to find ${description}`);
  }

  private async clickFirstVisible(selectors: string[], description: string): Promise<void> {
    const element = await this.firstVisible(selectors, description);
    await element.click();
  }

  private async dismissKeyboardIfOpen(): Promise<void> {
    try {
      await driver.hideKeyboard();
    } catch {
      // Keyboard may already be hidden depending on platform and focus state.
    }
  }

  private async withZeroImplicitTimeout<T>(fn: () => Promise<T>): Promise<T> {
    await driver.setTimeout({ implicit: 0 });
    try {
      return await fn();
    } finally {
      await driver.setTimeout({ implicit: 5000 });
    }
  }
}

export const codegenOnboardingPage = new CodegenOnboardingPage();
