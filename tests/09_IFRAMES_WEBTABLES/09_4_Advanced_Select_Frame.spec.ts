import{test,expect} from '@playwright/test'

test('Select Frames and Webtable',async({page})=>{

    // Open application
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    // Maximize browser window
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Wait for page load
    await page.waitForLoadState('domcontentloaded');
    // Click on the dropdown to open it
    await page.locator("//div[@data-testid='dropdown-language']").click();
    
    //Need to see all the dropdown list
    await page.locator("//div[@data-testid='dropdown-language']//div.select-option");
     
    await page.waitForTimeout(5000); // Wait for dropdown options to be visible
        
    // Select any one of the language from the dropdown options

    await page.getByText('Ruby').click();

    await page.locator("experience-shell").click();
    await page.getByText("Mid-level (4-6 years)",{exact:true}).click();

    await page.waitForTimeout(5000); // Wait for selection to be processed


});
