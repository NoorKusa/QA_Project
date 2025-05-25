import {expect, test} from "@playwright/test"
import { LoginPageClass } from "../pages/LoginPage";
import * as dotenv from 'dotenv'
dotenv.config({ path: './config/.env' });
test('Test login',async({page})=>{

    const loginPage = new LoginPageClass(page);

    await page.goto(process.env.BASEURL!);
   await loginPage.login(process.env.USER_NAME!, process.env.PASS_WORD!);

    await expect(page.getByText('Swag Labs')).toBeVisible();
    await expect(page.url()).toContain('inventory.html')
    console.log(page.url()) 
})

test('Test check empty username and empty password',async({page})=>{
  const loginPage = new LoginPageClass(page);
  await page.goto(process.env.BASEURL!)
  await loginPage.login('', '');
  await expect(page.locator('[data-test="error"]')).toBeVisible()
  await expect(page.locator('[data-test="error"]')).toContainText('Username is required')
})

test('Test empty username and exist password',async({page})=>{
  const loginPage = new LoginPageClass(page);
  await page.goto(process.env.BASEURL!)
  await loginPage.login('', 'secret_sauce');
  await expect(page.locator('[data-test="error"]')).toBeVisible()
})