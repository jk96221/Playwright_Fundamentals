import{test,expect} from '@playwright/test'

test('Select Frames and Webtable',async({page})=>{

    // Open application
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // Maximize browser window
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Wait for page load
    await page.waitForLoadState('domcontentloaded');
     
    // Select option from dropdown

    //await page.selectOption('#dropdown', 'Option 1'); // Select Option 1

     await page.locator('#dropdown').selectOption('1');
     
    await page.waitForTimeout(5000);

});


   


