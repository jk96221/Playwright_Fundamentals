import {test, expect} from '@playwright/test';

test('VWO Project', async ({page}) => {

  //You need to go to https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage

    await page.goto('https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');

    //Enter the incorrect Gmail ID, verify that the message will come. 

    await page.getByRole('textbox', {name: 'Email'}).fill('narasimha.s@gmail.com');
    //click Check Box
    await page.getByRole('checkbox', {name: 'I agree to VWO\'s Privacy Policy & Terms'}).check();

    await page.getByRole('button', {name: 'Create a Free Trial Account'}).click();
    
    //Verify the error message
    await expect(page.getByText('gmail.com doesn\'t look like a business domain. Please use your business email.')).toBeVisible();
    



});

