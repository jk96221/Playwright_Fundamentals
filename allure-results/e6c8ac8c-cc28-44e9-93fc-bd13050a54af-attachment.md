# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_SVG_Concepts\11_2_SVG_Flipkart_Item_Task.spec.ts >> Flipkart - Cheapest Mac Mini
- Location: tests\11_SVG_Concepts\11_2_SVG_Flipkart_Item_Task.spec.ts:3:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('div[data-id]').first().locator('div.KzDlHZ')

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | 
  3  | test.describe('Flipkart - Cheapest Mac Mini', () => {
  4  | 
  5  |     const url = 'https://www.flipkart.com/';
  6  | 
  7  |     test.beforeEach(async ({ page }) => {
  8  |         await page.goto(url, {
  9  |             waitUntil: 'networkidle'
  10 |         });
  11 | 
  12 |         // Close login popup if visible
  13 |         const closePopup = page.locator('button:has-text("✕")');
  14 | 
  15 |         if (await closePopup.isVisible().catch(() => false)) {
  16 |             await closePopup.click();
  17 |         }
  18 |     });
  19 | 
  20 |     test('Search macmini and get cheapest product', async ({ page }) => {
  21 | 
  22 |         // Search product
  23 |         await page.locator('input[name="q"]').fill('macmini');
  24 | 
  25 |         // Locate SVG Search Icon
  26 |         const svgElements: Locator = page.locator('button[type="submit"] svg');
  27 | 
  28 |         // Assert SVG visible
  29 |         await expect(svgElements.first()).toBeVisible();
  30 | 
  31 |         // Click SVG icon
  32 |         await svgElements.first().click();
  33 | 
  34 |         // Wait for products
  35 |         await page.waitForSelector('div[data-id]');
  36 | 
  37 |         // Click Low to High filter
  38 |         await page.locator('text=Price -- Low to High').click();
  39 | 
> 40 |         // Wait for sorting
     |                                                            ^ Error: locator.textContent: Target page, context or browser has been closed
  41 |         await page.waitForLoadState('networkidle');
  42 | 
  43 |         // First product after sorting
  44 |         const firstProduct = page.locator('div[data-id]').first();
  45 | 
  46 |         // Get title
  47 |         const title = await firstProduct
  48 |             .locator('div.KzDlHZ')
  49 |             .textContent();
  50 | 
  51 |         // Get price
  52 |         const price = await firstProduct
  53 |             .locator('div.Nx9bqj')
  54 |             .textContent();
  55 | 
  56 |         console.log('Cheapest Mac Mini');
  57 |         console.log(`Title : ${title}`);
  58 |         console.log(`Price : ${price}`);
  59 | 
  60 |         // Screenshot
  61 |         await page.screenshot({
  62 |             path: 'screenshots/cheapest-macmini.png',
  63 |             fullPage: true
  64 |         });
  65 | 
  66 |         // Assertion
  67 |         await expect(firstProduct).toBeVisible();
  68 |     });
  69 | });
```