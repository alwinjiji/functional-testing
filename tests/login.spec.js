import { test, expect } from '@playwright/test';

test('Login to GoTrade', async ({ page }) => {
  await page.goto('https://test1.gotrade.goquant.io');
  await page.fill('xpath=//input[@id="_r_0_-form-item"]', 'user20@goquant.io');
  await page.fill('xpath=//input[@placeholder="Enter your password"]', '60Re3G9KvvFl4Ihegxpi');
  
  await Promise.all([
    page.waitForNavigation(),
    page.click('xpath=//button[@type="submit"]')
  ]);

  // ✅ Verify login by checking the URL or an element on the dashboard
  await expect(page).toHaveURL(/dashboard|home/i);
});
