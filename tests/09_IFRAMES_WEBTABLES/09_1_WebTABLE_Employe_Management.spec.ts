import {test,expect} from '@playwright/test';

test('WebTable Employee Management',async ({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    //Xpath
    await page
    .locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']")
    .click();

    //Playwright function 
    await page
    .locator('tr:has(td:text("Priya.Nair"))')
    .locator("td")
    .first()
    .click();

    await page.waitForTimeout(6000);

});


