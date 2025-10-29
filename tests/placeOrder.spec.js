import { test, expect } from '@playwright/test';

test('Place an order in GoTrade', async ({ page }) => {
  // Step 1: Login
  await page.goto('https://test1.gotrade.goquant.io');
  await page.fill('xpath=//input[@id="_r_0_-form-item"]', 'user20@goquant.io');
  await page.fill('xpath=//input[@placeholder="Enter your password"]', '60Re3G9KvvFl4Ihegxpi');
  
  await Promise.all([
    page.waitForNavigation(),
    page.click('xpath=//button[@type="submit"]')
  ]);

  // Step 2: Place order
  await page.fill('xpath=//input[@id="emailInput"]', '.005');
  await page.fill('xpath=//input[@placeholder="Enter duration"]', '100');
  
  const tradeButton = page.locator('xpath=//button[@data-testid="trade-button"]');
  await expect(tradeButton).toBeEnabled();
  await tradeButton.click();

  //  Validate after placing order (URL, popup, or confirmation message)
  await expect(page).toHaveURL(/orders|confirmation|trade/i);
});

