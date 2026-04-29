import {test, expect} from '@playwright/test';

test('CSS locator', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Verify that we are on the inventory page
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Add the first item to the cart
    await page.locator('.inventory_item').first().locator('button').click();

    // Verify that the cart has 1 item
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});


