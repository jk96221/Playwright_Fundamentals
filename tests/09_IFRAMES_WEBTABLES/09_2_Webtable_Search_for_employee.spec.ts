import { test, expect } from '@playwright/test';

test('Search and select Meera.Rao in webtable', async ({ page }) => {

  // Open application
  await page.goto('https://app.thetestingacademy.com/playwright/webtable');

  // Maximize browser window
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Wait for page load
  await page.waitForLoadState('domcontentloaded');

  // Search for Meera.Rao using the actual searchbox role
  const searchInput = page.getByRole('searchbox', { name: 'Search employee table' });
  await page.waitForTimeout(2000);
  await expect(searchInput).toBeVisible();
  await page.waitForTimeout(2000);
  await searchInput.fill('Meera.Rao');

  await page.waitForTimeout(5000); // Wait for search results to update

  // Locate checkbox for Meera.Rao
  const checkbox = page.locator('tr:has-text("Meera.Rao") input[type="checkbox"]');
  await expect(checkbox).toBeVisible();

  // Select checkbox
  await checkbox.check();

  // Verify checkbox selected
  await expect(checkbox).toBeChecked();

  console.log('Meera.Rao searched and selected successfully');
});