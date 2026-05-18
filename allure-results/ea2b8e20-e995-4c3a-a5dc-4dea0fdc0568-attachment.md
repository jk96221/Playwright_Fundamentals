# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_SHADOW_DOM\Project#9_Shadow DOM, Calendars.spec.ts >> Handle Shadow DOM Elements
- Location: tests\12_SHADOW_DOM\Project#9_Shadow DOM, Calendars.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://selectorshub.com/xpath-practice-page/
Call log:
  - navigating to "https://selectorshub.com/xpath-practice-page/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: selectorshub.com
      - text: took too long to respond.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e16]:
          - link "Running Windows Network Diagnostics" [ref=e17] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e18]: ERR_CONNECTION_TIMED_OUT
  - generic [ref=e19]:
    - button "Reload" [ref=e21] [cursor=pointer]
    - button "Details" [ref=e22] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Handle Shadow DOM Elements', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://selectorshub.com/xpath-practice-page/');
     |                ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://selectorshub.com/xpath-practice-page/
  6  | 
  7  |     await page.waitForLoadState('domcontentloaded');
  8  | 
  9  |     // Shadow Host
  10 |     const shadowHost = page.locator('#userName');
  11 | 
  12 |     // Enter Name inside Shadow DOM
  13 |     await shadowHost.locator('input[placeholder="Enter name"]').fill('Narasimha');
  14 | 
  15 |     // Enter Pizza Name inside Shadow DOM
  16 |     await shadowHost.locator('input[placeholder="Enter Pizza Name"]').fill('Cheese Pizza');
  17 | 
  18 |     // Enter Password inside Shadow DOM
  19 |     await shadowHost.locator('input[type="password"]').fill('Test@123');
  20 | 
  21 |     // Assertion
  22 |     await expect(
  23 |         shadowHost.locator('input[placeholder="Enter name"]')
  24 |     ).toHaveValue('Narasimha');
  25 | 
  26 |     await page.waitForTimeout(5000);
  27 | });
```