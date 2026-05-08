import type { SelectorDefinition } from "../types/selector";
import { selectorToString } from "../locators/selector-registry";

export class MobileActions {
  private get platformName(): string {
    return String(driver.capabilities.platformName ?? "").toLowerCase();
  }

  private resolve(selector: SelectorDefinition | string): string {
    return typeof selector === "string" ? selector : selectorToString(selector);
  }

  async waitForVisible(selector: SelectorDefinition | string, timeout = 20000) {
    const element = await $(this.resolve(selector));
    await element.waitForDisplayed({ timeout });
    return element;
  }

  async tap(selector: SelectorDefinition | string): Promise<void> {
    const element = await this.waitForVisible(selector);
    await element.click();
  }

  async type(selector: SelectorDefinition | string, value: string): Promise<void> {
    const element = await this.waitForVisible(selector);
    await element.setValue(value);
  }

  async clearAndType(selector: SelectorDefinition | string, value: string): Promise<void> {
    const element = await this.waitForVisible(selector);
    await element.clearValue();
    await element.setValue(value);
  }

  async readText(selector: SelectorDefinition | string): Promise<string> {
    const element = await this.waitForVisible(selector);
    return element.getText();
  }

  async expectVisible(selector: SelectorDefinition | string): Promise<void> {
    await expect(await this.waitForVisible(selector)).toBeDisplayed();
  }

  async clickByText(text: string): Promise<void> {
    const selector = this.platformName === "ios"
      ? `//*[@name="${text}" or @label="${text}"]`
      : `//*[@text="${text}" or @content-desc="${text}"]`;
    await this.tap(selector);
  }

  async scrollToText(text: string): Promise<void> {
    if (this.platformName === "android") {
      await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`);
      return;
    }

    await driver.execute("mobile: scroll", { direction: "down", predicateString: `label == "${text}" OR name == "${text}"` });
  }

  async launchApp(): Promise<void> {
    await driver.launchApp();
  }

  async closeApp(): Promise<void> {
    await driver.closeApp();
  }

  async activateApp(appId: string): Promise<void> {
    await driver.activateApp(appId);
  }
}

export const mobileActions = new MobileActions();
