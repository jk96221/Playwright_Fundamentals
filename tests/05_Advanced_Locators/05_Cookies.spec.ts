import {test, expect} from '@playwright/test';
import path from 'node:path';

test("Cookies", async ({page}) => {

    await page.goto("https://app.vwo.com/#/login");
    
    // Read all the cookies
    const allCookies = await page.context().cookies();
    
    //add a cookie
    await page.context().addCookies([
        {
        name: "SessionID",
        value: "fake-session-id",
        domain: "app.vwo.com",
        path: "/",
        secure: true,
        httpOnly: true,
    },
    {
    name: "User_role",
    value: "Admin",
    domain: "app.vwo.com",
    path: "/",
    secure: true,
    httpOnly: true,
}
]);

    console.log("Total cookies: " + allCookies.length);

    allCookies.forEach(function(cookie) {
        console.log(cookie.name);
        console.log(cookie.value);
    });

    await page.waitForTimeout(5000);
});

