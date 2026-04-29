import {test, expect} from '@playwright/test';

test("locators ar lazy,strict, and auto-wait);", async ({page}) => 
    {
    await page.goto("https://awesomeqa.com/css/");

    const allSpans = page.locator("div.first>span");

    const count = await allSpans.count();
    console.log(count);
       
    for(let i=0; i<count; i++)
    {
        console.log(await allSpans.nth(i).textContent());   
    }       

    });

    


