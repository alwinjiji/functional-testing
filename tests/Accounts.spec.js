await page.goto('https://test1.gotrade.goquant.io');
await page.fill('xpath=INPUT_SELECTOR_FOR_USERNAME', 'your_username');
await page.fill('xpath=INPUT_SELECTOR_FOR_PASSWORD', 'your_password');
await page.click('xpath=//button[@type="submit"]');
await page.waitForNavigation();

const { chromium } = require('playwright'); // or 'firefox' or 'webkit'

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('YOUR_URL_HERE'); // Replace with your test URL

  const accountsButtonSelector = '#radix-r_4-trigger-radix-r_5';
  const options = ['Admin', 'GoRisk', 'GoOps', 'GoSettle', 'Settings'];

  for (const option of options) {
    // Hover on Accounts to reveal dropdown
    await page.hover(accountsButtonSelector);

    // Wait for and click the menu item by visible text
    const optionSelector = `span:text("${option}")`;
    await page.waitForSelector(optionSelector, { state: 'visible', timeout: 10000 });
    await page.click(optionSelector);

    // Optionally, add a wait for navigation or a UI change here if necessary.
    // await page.waitForNavigation();

    // Optionally go back if pages change, or handle state reset as needed
    // await page.goBack();

    // Demo pause; remove or adjust in production
    await page.waitForTimeout(1500);
  }

  await browser.close();
})();