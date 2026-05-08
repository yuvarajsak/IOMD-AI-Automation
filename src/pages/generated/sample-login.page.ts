import { BasePage } from "../base.page";

export class SampleLoginPage extends BasePage {
  constructor() {
    super("SampleLoginPage");
  }

  async userLaunchesTheApplication(): Promise<void> {
    throw new Error("Implement user launches the application in SampleLoginPage.userLaunchesTheApplication");
  }

  async userEntersUsernameInTheUsernameField(username: string): Promise<void> {
    throw new Error("Implement user enters username in the username field in SampleLoginPage.userEntersUsernameInTheUsernameField");
  }

  async userEntersPasswordInThePasswordField(password: string): Promise<void> {
    throw new Error("Implement user enters password in the password field in SampleLoginPage.userEntersPasswordInThePasswordField");
  }

  async userTapsTheLoginButton(): Promise<void> {
    throw new Error("Implement user taps the login button in SampleLoginPage.userTapsTheLoginButton");
  }

  async userVerifiesMessageIsDisplayed(message: string): Promise<void> {
    throw new Error("Implement user verifies message is displayed in SampleLoginPage.userVerifiesMessageIsDisplayed");
  }
}

export const sampleloginpage = new SampleLoginPage();
