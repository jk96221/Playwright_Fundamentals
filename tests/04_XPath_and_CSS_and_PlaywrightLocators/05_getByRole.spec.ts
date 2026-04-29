import { test, expect } from '@playwright/test';

test("Using getByRole to locate elements", async ({ page }) => {

    await page.goto("https://app.vwo.com/#/login");

    let username = page.getByRole('textbox', { name: /email address/i }).first();
    let password = page.getByRole('textbox', { name: /password/i });
    let loginButton = page.getByRole('button', { name: 'Sign in', exact: true });

    await username.fill("jk96221@gmail.com");
    await password.fill("Savaneesu@1");
    await loginButton.click();

    console.log("All Actions performed successfully");

    let err_msg = page.getByRole('generic').filter({
  hasText: "Your email, password, IP address or location did not match"
});

await expect(
  page.locator('text=Your email, password, IP address or location did not match')
).toBeVisible();
});