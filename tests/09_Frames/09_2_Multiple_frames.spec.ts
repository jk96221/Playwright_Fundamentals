import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Handle multiple Frames', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    // Access Main Frame
    const MainFrame: FrameLocator = page.frameLocator('[name="main"]');

    const HeaderText = await MainFrame.locator('h2').innerText();

    console.log(HeaderText);

    // Get all frames
    const AllFrames: Locator[] = await page.locator('//frame').all();

    console.log("Total No.of Frames:", AllFrames.length);

    // Print frame name and src
    for (const frame of AllFrames) {

        console.log(
            await frame.getAttribute('name'),
            ':',
            await frame.getAttribute('src')
        );
    }

    //select Side Frame

    let SideFrame: FrameLocator= await page.frameLocator('[name="side"]');
    await SideFrame.getByTestId('side-link-registration').click();

    await page.waitForTimeout(5000);

});