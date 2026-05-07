import { test, expect } from '@playwright/test';

test('basic multiple elements smoke test', async ({ page }) => {
  // Capture browser console logs
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

  const RightPanelLinks: string[] = await page.locator('a.list-group-item').allInnerTexts();
  console.log(RightPanelLinks.length);

  // Verify the page title contains Playwright.
  //await expect(page).toHaveTitle(/Playwright/);

  // Verify the Get started link is visible.
  //await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});

