import{test,expect} from "@playwright/test";

test("set reffer for entire context", async ({ browser }) => {

    const context = await browser.newContext({
        extraHTTPHeaders: {
            "reffer": "https://thetestingacademy.com"
        }
    });

    const page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    console.log("Page 1 - partner reffer included");

    await page.goto("https://katalon-demo-chromium.herokuapp.com/login");
    console.log("Page 2 - partner reffer included");

});


