import { test, expect } from '@playwright/test';

test('Handle Iframe', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames');

    // Optional: Maximize browser window
    // await page.setViewportSize({ width: 1920, height: 1080 });

    // Switch to iframe
    const VehicleFrame = page.frameLocator('#frame-one');

    // Fill form fields
    await VehicleFrame.locator('#RESULT_TextField-1').fill('Hyundai-i10');
    await VehicleFrame.locator('#RESULT_TextField-2').fill('Narasimharao');
    await VehicleFrame.locator('#RESULT_TextField-3').fill('AP32ZA7832');

    // Select vehicle type
    await VehicleFrame.locator('#RESULT_RadioButton-1').selectOption('SUV');

    // Fill year
    await VehicleFrame.locator('#RESULT_TextField-4').fill('2022');

    // Fill comments
    await VehicleFrame.locator('#RESULT_TextArea-1')
        .fill('Amazing car for family and long drives');

    // Click submit button inside iframe
    await VehicleFrame.getByText('Submit registration', { exact: true }).click();

    // Capture output
    const output = await VehicleFrame.locator('#vehicle-output').innerText();

    console.log('Vehicle Information:', output);

    // Optional assertion
    await expect(VehicleFrame.locator('#vehicle-output'))
        .toContainText('Hyundai-i10');
});