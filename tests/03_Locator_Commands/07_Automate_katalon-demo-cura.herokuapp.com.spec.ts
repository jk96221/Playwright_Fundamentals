import {test, expect} from '@playwright/test';
import { BaseUrl } from './../../../PLAYWRIGHTWITHAI/Chapter16_Import_Export_Concepts/TestUtility';

test("locators are lazy,strict and auto-waiting", async ({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    //Lazy locators

    let Make_Appointment = page.locator("#btn-make-appointment");
    await Make_Appointment.click();

    let username = page.locator("#txt-username");
    let password = page.locator("#txt-password");
    let loginButton = page.locator("#btn-login");
    
    //fill the username and password and click on login button

    
    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginButton.click();
    
    console.log("All Actions performed successfully");

    //https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. 
      await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

      //// The page contains make appointments. Make Appointment
        let Make_Appointment_Header = page.locator("h2");
        await expect(Make_Appointment_Header).toHaveText("Make Appointment");
        


    


});