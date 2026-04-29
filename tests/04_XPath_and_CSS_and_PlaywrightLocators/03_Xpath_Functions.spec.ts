import {test, expect} from '@playwright/test';

test("locators are lazy,strict and auto-waiting", async ({page})=>{

    await page.goto("https://app.vwo.com/#/login");

//Xpath Functions

//contains() function
    let username = page.locator("xpath=//input[contains(@id, 'login-username')]");

//starts-with() function    
    let password = page.locator("xpath=//input[starts-with(@id, 'login-password')]");

//string() function
    let loginButton = page.locator("xpath=//button[string(@id) = 'js-login-btn']");

    //fill the username and password and click on login button

    await username.fill("jk96221@gmail.com");
    await password.fill("Savaneesu@1");
    await loginButton.click();

    console.log("All Actions performed successfully");
//text() function
let err_msg = page.locator("xpath=//div[@id='js-notification-box']/text()");


await expect(err_msg).toContainText("Your email, password, IP address or location did not match");

});