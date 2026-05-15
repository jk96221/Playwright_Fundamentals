import{test,expect,FrameLocator,Locator} from '@playwright/test';

test('Drag and Drop with Keyboard', async ({ page }) => {

// Navigate to the drag and drop page
await page.goto('https://app.thetestingacademy.com/playwright/drag_and_drop');

await page.locator('#card-reivew-pr-21').dragTo(page.locator('[#data-status="in-progress"]'));
await page.locator('#card-reivew-pr-21').dragTo(page.locator('[#data-status="reivew"]'));

//manual drag and drop using mouse actions

const source = page.locator('#card-write-spec');
const sBox = (await source.boundingBox())!;

const target = page.locator('[#data-status="reivew"]');
const tBox = (await target.boundingBox())!;

await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
await page.mouse.down();
await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2);
await page.mouse.up();




await page.waitForTimeout(5000); // Wait for 2 seconds to observe the result
});


