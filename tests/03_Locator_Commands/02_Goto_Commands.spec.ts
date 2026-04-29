import { test, expect } from "@playwright/test";

  test("simple goto - uses the default locator", async ({ page }) => 
    {
    //No waitUntil specified - default to "load"

    await page.goto("https://www.example.com");

    let title = await page.title();
    console.log("Title:",title);

    await expect(page).toHaveURL("https://www.example.com/");
    console.log("URL is verified");

});


    