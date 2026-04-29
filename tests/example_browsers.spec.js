const { test, expect } = require('@playwright/test');

test.describe.parallel('Cross-browser smoke', () => {
  test('example.com has expected heading', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page.locator('h1')).toHaveText('Example Domain');
  });
});
