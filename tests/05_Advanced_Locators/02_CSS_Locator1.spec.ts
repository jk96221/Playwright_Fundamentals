import {test, expect} from '@playwright/test';

test("locators ar lazy,strict, and auto-wait);", async ({page}) => 
    {
    await page.goto("https://awesomeqa.com/css/");

    const allSpans = page.locator("div.first>span");

    const count = await allSpans.count();
    console.log(count);

    const span1 = await allSpans.first().textContent();
    const span2 = await allSpans.nth(1).textContent();
    const span3 = await allSpans.nth(2).textContent();
    const span5 = await allSpans.nth(4).textContent();

    const lastspan = await allSpans.last().textContent();

    console.log("First span:", span1);
    console.log("Second span:", span2);
    console.log("Third span:", span3);
    console.log("Fifth span:", span5);
    console.log("Last span:", lastspan);

    });



