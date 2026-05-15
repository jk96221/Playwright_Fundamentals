import {test, expect,FrameLocator,Locator} from '@playwright/test';

test('SpiceJet Keyboard Navigation Test', async ({page}) => {
    // Navigate to the SpiceJet website
   await page.goto('https://www.spicejet.com/');
   
    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    //click on Add-on
    await page.getByText('Add-ons',{exact:true}).hover();

    //click on flyEarly
    await page.getByText('FlyEarly',{exact:true}).click();

    await page.waitForTimeout(5000);

});


