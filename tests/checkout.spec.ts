import { expect, test } from '@playwright/test';
import { LoginPageClass } from '../pages/LoginPage';
import * as dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

test.beforeEach(async ({ page },testInfo) => {
      console.log(`Started test "${testInfo.title}"`);
  const loginPage = new LoginPageClass(page);
  await page.goto(process.env.BASEURL!);
  await loginPage.login(process.env.USER_NAME!, process.env.PASS_WORD!);
});


 [
  { firstName: 'Bayan', lastName: 'Noor', postalCode: '300' },
  { firstName: 'Sara', lastName: 'Ali', postalCode: '12345' },
  { firstName: 'Omar', lastName: 'Khalid', postalCode: '999' }
].forEach(({ firstName, lastName, postalCode }) => {
  test(`checkout with ${firstName} ${lastName}`, async ({ page }) => {


    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="shopping-cart-link"]');
    await page.click('[data-test="checkout"]');

    await page.locator('[data-test="firstName"]').fill(firstName);
    await page.locator('[data-test="lastName"]').fill(lastName);
    await page.locator('[data-test="postalCode"]').fill(postalCode);
    await page.waitForTimeout(2000);

    await page.click('[data-test="continue"]');
    await page.click('[data-test="finish"]');
     
   
  });
});
