# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_SHADOW_DOM\Project#9_Shadow DOM, Calendars.spec.ts >> Shadow DOM handling >> locate shadow elements and fill form
- Location: tests\12_SHADOW_DOM\Project#9_Shadow DOM, Calendars.spec.ts:16:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://selectorshub.com/xpath-practice-page/
Call log:
  - navigating to "https://selectorshub.com/xpath-practice-page/", waiting until "domcontentloaded"

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
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | 
  3  | const URL = 'https://selectorshub.com/xpath-practice-page/';
  4  | 
  5  | test.describe('Shadow DOM handling', () => {
  6  | 
  7  |     test.beforeEach(async ({ page }) => {
  8  | 
> 9  |         await page.goto(URL, {
     |                    ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://selectorshub.com/xpath-practice-page/
  10 |             waitUntil: 'domcontentloaded',
  11 |             timeout: 120000
  12 |         });
  13 | 
  14 |     });
  15 | 
  16 |     test('locate shadow elements and fill form', async ({ page }) => {
  17 | 
  18 |         // Shadow Host
  19 |         const shadowHost = page.locator('#userName');
  20 | 
  21 |         // Name Field
  22 |         const nameField = shadowHost.locator(
  23 |             'input[placeholder="Enter name"]'
  24 |         );
  25 | 
  26 |         await nameField.fill('Narasimha');
  27 | 
  28 |         // Pizza Field
  29 |         const pizzaField = shadowHost.locator(
  30 |             'input[placeholder="Enter Pizza Name"]'
  31 |         );
  32 | 
  33 |         await pizzaField.fill('Cheese Pizza');
  34 | 
  35 |         // Password Field
  36 |         const passwordField = shadowHost.locator(
  37 |             'input[type="password"]'
  38 |         );
  39 | 
  40 |         await passwordField.fill('Test@123');
  41 | 
  42 |         // Assertion
  43 |         await expect(nameField)
  44 |             .toHaveValue('Narasimha');
  45 | 
  46 |         await expect(pizzaField)
  47 |             .toHaveValue('Cheese Pizza');
  48 | 
  49 |         await expect(passwordField)
  50 |             .toHaveValue('Test@123');
  51 | 
  52 |         await page.waitForTimeout(5000);
  53 | 
  54 |     });
  55 | 
  56 | });
```