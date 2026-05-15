import{test,expect,FrameLocator,Locator} from '@playwright/test';

test('Handling Right Click', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');

    await page.locator('span.context-menu-one').click({button:'right'});
    await page.getByText('Copy',{exact: true}).first().click();

    //get to fetch all the options after the right click

    const allOptions: String[] = await 
    page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(allOptions);

    
    await page.waitForTimeout(5000);

})
