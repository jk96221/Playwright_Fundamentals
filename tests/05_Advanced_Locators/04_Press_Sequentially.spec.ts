import {test, expect} from '@playwright/test';

test("Press Sequentially", async ({page}) => {

    await page.goto("https://www.awesomeqa.com/practice.html");
    await page.locator('input[name="firstname"]').fill("the testing academy");

    await page.waitForTimeout(5000);
    await page.goto("https://app.vwo.com/#/login");
     await page.waitForTimeout(5000);
    await page.goBack();


});




    