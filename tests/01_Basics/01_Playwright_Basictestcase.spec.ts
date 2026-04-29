import { test, expect } from '@playwright/test';

test('Verify the title of the app.vwo.com', async ({ page }) => {
    await page.goto('https://app.vwo.com/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Login - VWO");
});


