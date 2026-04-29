import { test, expect } from "@playwright/test";

test("navigate with custom referer", async ({ page }) => {
     
    await page.goto("https://www.example.com", {
        referer: "https://www.google.com"
    });
    
console.log("Navigated to example.com with referer set to google.com");
console.log("Current URL:", page.url());


    