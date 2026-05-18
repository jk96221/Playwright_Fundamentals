# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Frames\09_2_Multiple_frames.spec.ts >> Handle multiple Frames
- Location: tests\09_Frames\09_2_Multiple_frames.spec.ts:3:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import { test, expect, FrameLocator, Locator } from '@playwright/test';
  2  | 
  3  | test('Handle multiple Frames', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
  6  | 
  7  |     const MainFrame:FrameLocator = await page.frameLocator('[name="main"]');
  8  |     const HeaderText =await MainFrame.locator('h2').innerText();
  9  | 
  10 |     console.log(HeaderText);
  11 | 
> 12 |     page.waitForTimeout(5000);
     |          ^ Error: page.waitForTimeout: Test ended.
  13 | 
  14 |     const AllFrames:Locator[]=await page.locator('//frame').all();
  15 |     console.log("Total No.of Frames:",+ AllFrames.length);
  16 |     
  17 |     for (const frame of AllFrames)
  18 |     {
  19 |         console.log(await frame.getAttribute('name'),':', await frame.getAttribute('src'));
  20 |     }
  21 |     
  22 | });
```