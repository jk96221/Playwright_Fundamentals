# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Keyboard_Hover_DragandDrop\10_5_DragandDrop_Advanced.spec.ts >> Drag and Drop with Keyboard
- Location: tests\10_Keyboard_Hover_DragandDrop\10_5_DragandDrop_Advanced.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.focus: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#draggable')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - button "Dismiss banner" [ref=e4] [cursor=pointer]:
      - img [ref=e5]
    - generic [ref=e8]:
      - generic [ref=e9]: LIVE
      - generic [ref=e11]: 🎭 Playwright + AI Blueprint
      - generic [ref=e12]: New Batch Launching
      - generic [ref=e13]: "|"
      - generic [ref=e14]: New Batch • 29 Apr 2026, 7 AM IST
      - generic [ref=e15]: "|"
      - generic [ref=e16]:
        - generic [ref=e17]: ₹35,000
        - generic [ref=e18]: ₹9,999
        - generic [ref=e19]: 33% OFF
      - generic [ref=e20]:
        - img [ref=e21]
        - text: "Code:"
        - generic [ref=e23]: PLAYWRIGHT
      - generic [ref=e24]:
        - button "Join" [ref=e25] [cursor=pointer]:
          - img [ref=e26]
          - text: Join
        - link "Chat on WhatsApp" [ref=e31] [cursor=pointer]:
          - /url: https://sdet.live/WhatsApp
          - img [ref=e32]
        - generic [ref=e34]:
          - button "View announcement 1" [ref=e35] [cursor=pointer]
          - button "View announcement 2" [ref=e36] [cursor=pointer]
  - generic [ref=e38]:
    - heading "404" [level=1] [ref=e39]
    - paragraph [ref=e40]: Oops! Page not found
    - link "Return to Home" [ref=e41] [cursor=pointer]:
      - /url: /
  - button "Chat with support on WhatsApp" [ref=e42] [cursor=pointer]:
    - img
```

# Test source

```ts
  1  | import{test,expect,FrameLocator,Locator} from '@playwright/test';
  2  | 
  3  | test('Drag and Drop with Keyboard', async ({ page }) => {
  4  | 
  5  | // Navigate to the drag and drop page
  6  | await page.goto('https://app.thetestingacademy.com/playwright/drag_and_drop');
  7  | 
  8  | // Locate the draggable element and the drop target
  9  | const draggable = page.locator('#draggable');
  10 | const dropTarget = page.locator('#droppable');
  11 | 
  12 | // Focus on the draggable element
> 13 | await draggable.focus();
     |                 ^ Error: locator.focus: Test timeout of 30000ms exceeded.
  14 | // Simulate keyboard events to perform drag and drop
  15 | await page.keyboard.down('Control'); // Hold down the Control key
  16 | await page.keyboard.press('ArrowRight'); // Move right
  17 | await page.keyboard.press('ArrowDown'); // Move down
  18 | await page.keyboard.up('Control'); // Release the Control key
  19 | 
  20 | // Verify that the draggable element has been dropped into the target
  21 | await expect(dropTarget).toContainText('Dropped!');
  22 | 
  23 | await page.waitForTimeout(5000); // Wait for 2 seconds to observe the result
  24 | });
  25 | 
  26 | 
  27 | 
```