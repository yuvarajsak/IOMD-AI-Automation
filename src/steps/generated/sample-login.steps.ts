import { Given, Then, When } from "@wdio/cucumber-framework";
import { sampleloginpage } from "../../pages/generated/sample-login.page";

When("user enters {string} in the username field", async function (username: string) {
  await sampleloginpage.userEntersUsernameInTheUsernameField(username);
});
When("user enters {string} in the password field", async function (password: string) {
  await sampleloginpage.userEntersPasswordInThePasswordField(password);
});
Then("user taps the login button", async function () {
  await sampleloginpage.userTapsTheLoginButton();
});
Then("user verifies {string} is displayed", async function (message: string) {
  await sampleloginpage.userVerifiesMessageIsDisplayed(message);
});

