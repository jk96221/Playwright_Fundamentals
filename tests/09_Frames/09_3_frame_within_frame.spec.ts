import { test, expect, FrameLocator } from '@playwright/test';

test('Handle Frame within Frame', async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-scenario');

    // Select the first matching iframe
    const frame1: FrameLocator = page.frameLocator('#pact1').first();

    // Nested iframes
    const frame2: FrameLocator = frame1.frameLocator('#pact2');
    const frame3: FrameLocator = frame2.frameLocator('#pact3');

    // Fill fields
    await frame1.locator('#inp_val').fill('Poornima');

    await frame2.locator('#jex').fill('Anusha');

    await frame3.locator('#glaf').fill('Marriage');

    const headerText = await page.locator('h3').innerText();

    console.log(headerText);

    await page.waitForTimeout(5000);
});