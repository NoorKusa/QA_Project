import { Page } from "@playwright/test";
import * as dotenv from 'dotenv'
dotenv.config({ path: './config/.env' });

export class LoginPageClass {
  private username;
  private password;
  private loginButton;

  constructor(private page: Page) {
    this.page=page;
    this.username = this.page.locator('[data-test="username"]');
    this.password = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
  }

  async gotoLoginPage() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
