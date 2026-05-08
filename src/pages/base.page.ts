import { legacyStepExecutor } from "../support/legacy-step-executor";

export abstract class BasePage {
  constructor(protected readonly pageName: string) {}

  protected accessibilityId(id: string): ChainablePromiseElement {
    return $(`~${id}`);
  }

  protected androidUiSelector(selector: string): ChainablePromiseElement {
    return $(`android=${selector}`);
  }

  protected iosPredicate(predicate: string): ChainablePromiseElement {
    return $(`-ios predicate string:${predicate}`);
  }

  async tap(selector: string): Promise<void> {
    await $(selector).waitForDisplayed({ timeout: 20000 });
    await $(selector).click();
  }

  async type(selector: string, value: string): Promise<void> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout: 20000 });
    await element.setValue(value);
  }

  async text(selector: string): Promise<string> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout: 20000 });
    return element.getText();
  }

  async expectVisible(selector: string): Promise<void> {
    await expect($(selector)).toBeDisplayed();
  }

  async pause(seconds = 1): Promise<void> {
    await browser.pause(seconds * 1000);
  }

  protected async executeLegacyStep(stepText: string, parameters: Record<string, string>): Promise<void> {
    await legacyStepExecutor.execute(stepText, parameters);
  }
}
