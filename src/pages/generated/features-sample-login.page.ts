import { BasePage } from "../base.page";

export class SampleLoginFeaturesSampleLoginPage extends BasePage {
  constructor() {
    super("SampleLoginFeaturesSampleLoginPage");
  }

  async userLaunchesTheApplication(): Promise<void> {
    await this.executeLegacyStep("user launches the application", {});
  }

  async userEntersUsernameInTheUsernameField(username: string): Promise<void> {
    await this.executeLegacyStep("user enters \"<username>\" in the username field", { "username": username });
  }

  async userEntersPasswordInThePasswordField(password: string): Promise<void> {
    await this.executeLegacyStep("user enters \"<password>\" in the password field", { "password": password });
  }

  async userTapsTheLoginButton(): Promise<void> {
    await this.executeLegacyStep("user taps the login button", {});
  }

  async userVerifiesMessageIsDisplayed(message: string): Promise<void> {
    await this.executeLegacyStep("user verifies \"<message>\" is displayed", { "message": message });
  }
}

export const sampleloginfeaturessampleloginpage = new SampleLoginFeaturesSampleLoginPage();
