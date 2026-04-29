import {test, expect} from '@playwright/test';

test('Navigate to FX Wallet', async ({ page }) => {
    await test.step('Navigate to FX Wallet', async () => {
        await page.goto('http://172.16.10.88:4202/#/login');

        // Enter Username and Password
        await page.getByRole('textbox', { name: 'Username' }).fill('IDS');    
        await page.getByRole('textbox', { name: 'Password' }).fill('Ids@2026');
        await page.getByRole('button', { name: 'Login' }).click();

        await page.waitForTimeout(5000);

        // navitage to FX Wallet tab
        await page.getByRole('button', { name: 'FX Wallet' }).click();  
        

        await page.waitForTimeout(5000);
        

    });
});
