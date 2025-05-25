import {test} from "@playwright/test"
import { LoginPageClass } from "../pages/LoginPage";
import * as dotenv from 'dotenv'
dotenv.config({ path: './config/.env' });

    
test.beforeEach(async ({ page },testInfo) => {
     console.log(`Started test "${testInfo.title}"`);
  const loginPage = new LoginPageClass(page);
  await page.goto(process.env.BASEURL!);
  await loginPage.login(process.env.USER_NAME!, process.env.PASS_WORD!);
});


test.describe('Sort Feature', () => {
test('Test sort from A to Z',async({page})=>{
    await page.click('[data-test="product-sort-container"]')
     await page.locator('[data-test="product-sort-container"]').selectOption('az');
      await page.waitForTimeout(2000);
})
test('Price from High to Low',async({page})=>{
     await page.click('[data-test="product-sort-container"]')
      await page.locator('[data-test="product-sort-container"]').selectOption('hilo');  
})

});

