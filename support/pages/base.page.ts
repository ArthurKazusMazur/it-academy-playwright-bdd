import { expect, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickButtonHasName(buttonName: string) {
    await this.page
      .locator('[type="button"]', { hasText: `${buttonName}` })
      .click();
  }

  async assertElementContainsText(element: any, text: string) {
    await expect(element).toContainText(text);
  }

  async assertPageUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async assertIsVisible(element: any) {
    await expect(element).toBeVisible();
  }
  async assertBorderColor(element: any, color: string) {
    await expect(element, `Frame has color different then ${color}`).toHaveCSS(
      "border",
      color
    );
  }
}
