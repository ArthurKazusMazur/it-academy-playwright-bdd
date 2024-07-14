import { createBdd } from "playwright-bdd";
import { PageFacade } from "../../support/facade/facade";
import { ContextManager } from "../../support/context.manager";

const { Given, When, Then } = createBdd();

Given("User navigates to the TextBoxPage", async ({ page }) => {
  // With pure POM:
  // const textBoxPage = new TextBoxPage(page);
  // await textBoxPage.goto();

  // With facade pattern + POM:
  const facade = new PageFacade(page);

  await facade.textBoxPage.goto();
  ContextManager.setContext("textBoxPage", facade);
});

When(
  "User specifys his data as: {string}, {string}, {string} in the data form",
  async ({ page }, fullName: string, email: string, currentAddress: string) => {
    // With pure POM:
    // const textBoxPage = new TextBoxPage(page);
    // await textBoxPage.fillUserData(fullName, email, currentAddress);

    // With facade pattern + POM:
    const facade = ContextManager.getContext("textBoxPage");
    await facade.textBoxPage.fillUserData(fullName, email, currentAddress);
  }
);

When("User clicks {string} button", async ({ page }, buttonName: string) => {
  // With pure POM:
  // const textBoxPage = new TextBoxPage(page);
  // await textBoxPage.clickButtonHasName(buttonName);

  // With facade pattern + POM:
  const facade = ContextManager.getContext("textBoxPage");
  await facade.textBoxPage.clickButtonHasName(buttonName);
});

Then(
  "User's data form is filled with proper data: {string}, {string}, {string}",
  async ({ page }, fullname: string, email: string, currentAddress: string) => {
    // With pure POM:
    // const textBoxPage = new TextBoxPage(page);
    // await textBoxPage.assertElementContainsText(textBoxPage.emailOutput, email);
    // await textBoxPage.assertElementContainsText(
    //   textBoxPage.currentAddressOutput,
    //   currentAddress
    // );
    // await textBoxPage.assertElementContainsText(
    //   textBoxPage.nameOutput,
    //   fullname
    // );

    // With facade pattern + POM:
    const facade = ContextManager.getContext("textBoxPage");

    await facade.textBoxPage.assertElementContainsText(
      facade.textBoxPage.emailOutput,
      email
    );
    await facade.textBoxPage.assertElementContainsText(
      facade.textBoxPage.currentAddressOutput,
      currentAddress
    );
    await facade.textBoxPage.assertElementContainsText(
      facade.textBoxPage.nameOutput,
      fullname
    );
  }
);

Then(
  "emailInput border should be highlighted with {string}",
  async ({ page }, color: string) => {
    // With pure POM:
    // const textBoxPage = new TextBoxPage(page);
    // await textBoxPage.assertBorderColor(textBoxPage.emailInput, color);

    // With facade pattern + POM:
    const facade = ContextManager.getContext("textBoxPage");
    await facade.textBoxPage.assertBorderColor(
      facade.textBoxPage.emailInput,
      color
    );
  }
);
