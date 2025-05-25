import {expect, test} from "@playwright/test"
import { LoginPageClass } from "../pages/LoginPage";
import * as dotenv from 'dotenv'
dotenv.config({ path: './config/.env' });

test.beforeEach(async ({ page },testInfo) => {
      console.log(`Started test "${testInfo.title}"`);
  const loginPage = new LoginPageClass(page);
  await page.goto(process.env.BASEURL!);
  await loginPage.login(process.env.USER_NAME!, process.env.PASS_WORD!);
});


test('Remove from cart case 1',async({page})=>{
     await page.click('[data-test="add-to-cart-sauce-labs-backpack"]')
     await page.click('[data-test="remove-sauce-labs-backpack"]')
})
test('Remove from cart case 2',async({page})=>{
     await page.click('[data-test="add-to-cart-sauce-labs-backpack"]')
      await page.click('[data-test="shopping-cart-link"]');
      await page.click('[data-test="remove-sauce-labs-backpack"]')
})
test.fail(' Fail remove',async({page})=>{
     await page.click('[data-test="add-to-cart-sauce-labs-backpack"]')
      await page.click('[data-test="shopping-cart-link"]');
      await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
})




