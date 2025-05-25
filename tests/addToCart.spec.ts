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


test('Add to cart',async({page})=>{
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]')
     await page.waitForTimeout(1000)
  const productName = await page.locator('[data-test="item-4-title-link"]').textContent();
  console.log(productName);
})
test.skip('Add to cart 2',async({page})=>{
    
    await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
     await page.waitForTimeout(1000)
  const productName = await page.locator('[data-test="item-4-title-link"]').textContent();
  console.log(productName);
})


