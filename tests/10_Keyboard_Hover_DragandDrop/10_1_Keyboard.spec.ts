import {test, expect} from '@playwright/test';

test('Handle Keyboard Events', async ({ page }) => {

    //Navigate to Page
    await page.goto('https://keycode.info/');

    //Handle Keyboard Events

    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });

    await page.waitForTimeout(2000);

    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'ArrowLeft.png' });

    await page.waitForTimeout(2000);

    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: 'Shift.png' });
    await page.waitForTimeout(2000);

    await page.keyboard.up('Shift');
    await page.keyboard.down('Shift');

    await page.waitForTimeout(2000);

});

