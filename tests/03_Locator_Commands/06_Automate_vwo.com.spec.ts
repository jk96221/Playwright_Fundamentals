import {test, expect} from '@playwright/test';

test("locators are lazy,strict and auto-waiting", async ({page})=>{

    await page.goto("https://app.vwo.com/#/login");

    //Lazy locators

    let username = page.locator("#login-username");
    let password = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    //fill the username and password and click on login button

    await username.fill("jk96221@gmail.com");
    await password.fill("Savaneesu@1");
    await loginButton.click();

    console.log("All Actions performed successfully");

    let err_msg = page.locator("#js-notification-box-msg");
   await expect(err_msg).toContainText("Your email, password, IP address or location did not match");

});