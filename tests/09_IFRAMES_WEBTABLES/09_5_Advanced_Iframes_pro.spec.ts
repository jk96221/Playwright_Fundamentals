import {test, expect} from '@playwright/test';

test('Handle Iframe and Webtable together', async ({page}) => {

    // Navigate to the page

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
    
    //Handle single select dropdown
    await page.locator("#rs-single").click();
    await page.getByText("Cypress").click();

    //Handle multi select dropdown
    await page.locator("#rs-multi").click();
    await page.getByText("Pytest",{exact:true}).click();
    await page.getByText("JUnit",{exact:true}).click();
    await page.getByText("Jest",{exact:true}).click();
     
    await page.keyboard.press('Escape'); // Close the dropdown

    //Handle create and multiple select dropdown

    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing",{exact:true}).click();
    await page.getByText("security",{exact:true}).click();
    await page.getByText("accessibility",{exact:true}).click();

    //Async — wait for results
await page.getByTestId('rs-async-input').fill('pun');
await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
await page.getByRole('option', { name: 'Pune' }).click();


    await page.waitForTimeout(5000);

});
