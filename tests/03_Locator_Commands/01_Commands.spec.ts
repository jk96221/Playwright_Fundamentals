import {test, expect} from '@playwright/test';

test("goto with different waitUntil options", async ({page}) => {

    await page.goto("https://www.example.com", {waitUntil: "commit"});
    console.log("commit: server responded");

    //Wait for HTML to be parsed
    await page.goto("https://www.example.com", {waitUntil: "domcontentloaded"});
    console.log("domcontentloaded: HTML parsed");

    //DEFAULT - wait for everything (images, CSS, Scripts)
    
    await page.goto("https://www.example.com", {waitUntil: "load"});
    console.log("load: All resources loaded");

    //SLOWEST - wait for all newtwork activity to stop
    await page.goto("https://www.example.com", {waitUntil: "networkidle"});
    console.log("networkidle: No network activity for 500ms");
});


