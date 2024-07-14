import { Page } from "@playwright/test";
import { TextBoxPage } from "../pages/text-box.page";
import { BasePage } from "../pages/base.page";

export class PageFacade {
  private page: Page;
  public textBoxPage: TextBoxPage;
  public basePage: BasePage;

  constructor(page: Page) {
    this.page = page;
    this.textBoxPage = new TextBoxPage(page);
    this.basePage = new BasePage(page);
  }
}
