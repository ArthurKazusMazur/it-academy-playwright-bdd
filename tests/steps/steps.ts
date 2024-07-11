import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd();

Given("User navigates to the TextBoxPage", async ({ page }) => {
  await page.goto("/text-box", {
    waitUntil: "domcontentloaded",
  });
});

When(
  "User specifys his data as: {string}, {string}, {string} in the data form",
  async ({ page }, fullName: string, email: string, currentAddress: string) => {
    await page.locator("#userName").fill(fullName);
    await page.locator('[type="email"]').fill(email);
    await page.locator(".form-control").nth(2).fill(currentAddress);
  }
);

When("User clicks {string} button", async ({ page }, buttonName: string) => {
  await page.locator('[type="button"]', { hasText: `${buttonName}` }).click();
});

Then(
  "User's data form is filled with proper data: {string}, {string}, {string}",
  async ({ page }, fullname: string, email: string, currentAddress: string) => {
    await expect(page.locator("#email")).toContainText(email);
    await expect(page.locator("#output #currentAddress")).toContainText(
      currentAddress
    );
    await expect(page.locator("#name")).toContainText(fullname);
  }
);
