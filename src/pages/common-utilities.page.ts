import { mobileActions } from "../actions/mobile.actions";
import { legacyAppLocators, legacySafariLocators, legacyWebLocators } from "../selectors/generated";

export class CommonUtilitiesPage {
  async enterEmail(email: string): Promise<void> {
    await mobileActions.type(legacyAppLocators.emailValue, email);
  }

  async tapFetchProfile(): Promise<void> {
    await mobileActions.tap(legacyAppLocators.fetch);
  }

  async enableSafariExtension(): Promise<void> {
    await mobileActions.scrollToText("Apps");
    await mobileActions.tap(legacySafariLocators.apps);
    await mobileActions.scrollToText("Safari");
    await mobileActions.tap(legacySafariLocators.safari);
    await mobileActions.scrollToText("Extensions");
    await mobileActions.tap(legacySafariLocators.extension);
  }

  async openAutofillExtension(): Promise<void> {
    await mobileActions.tap(legacyWebLocators.iomdExtension);
  }

  async acceptCookiesIfPresent(): Promise<void> {
    try {
      await mobileActions.tap(legacyWebLocators.acceptCookies);
    } catch {
      // Cookie prompts are site-specific; absence is expected on many flows.
    }
  }
}

export const commonUtilitiesPage = new CommonUtilitiesPage();
