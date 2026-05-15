import {test , expect} from '@playwright/Test';

test('Task - Hovering', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    await page.getByTestId('nav-add-ons').hover();

    await page.getByTestId('test-id-Wifi').click();

    await page.waitForTimeout(5000);

    let OutputMessage : String = await page.locator('#output').innerText();
    console.log(OutputMessage);
     expect(OutputMessage).toContain('"testId": "test-id-Wifi"');
});
