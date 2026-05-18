# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_IFRAMES_WEBTABLES\09_4_Advanced_Select_Frame.spec.ts >> Select Frames and Webtable
- Location: tests\09_IFRAMES_WEBTABLES\09_4_Advanced_Select_Frame.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@data-testid=\'dropdown-language\']//div.select-option') to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary "Practice navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "T The Testing Academy" [ref=e5] [cursor=pointer]:
        - /url: ../index.html
        - generic [ref=e6]: T
        - strong [ref=e8]: The Testing Academy
      - button "Toggle sidebar" [ref=e9] [cursor=pointer]:
        - img [ref=e10]
    - generic [ref=e13]:
      - img [ref=e14]
      - searchbox / [ref=e17]
      - generic [ref=e18]: /
    - navigation [ref=e19]:
      - generic [ref=e20]:
        - paragraph [ref=e21]:
          - img [ref=e22]
          - generic [ref=e24]: Get started
        - list [ref=e25]:
          - listitem [ref=e26]:
            - link "Overview" [ref=e27] [cursor=pointer]:
              - /url: ../index.html
              - img [ref=e29]
              - generic [ref=e32]: Overview
      - generic [ref=e33]:
        - paragraph [ref=e34]:
          - img [ref=e35]
          - generic [ref=e37]: Selectors & Locators
        - list [ref=e38]:
          - listitem [ref=e39]:
            - link "Multiple Element Filter" [ref=e40] [cursor=pointer]:
              - /url: ../multiple_element_filter.html
              - img [ref=e42]
              - generic [ref=e45]: Multiple Element Filter
          - listitem [ref=e46]:
            - link "Web Table Directory" [ref=e47] [cursor=pointer]:
              - /url: ../webtable.html
              - img [ref=e49]
              - generic [ref=e54]: Web Table Directory
      - generic [ref=e55]:
        - paragraph [ref=e56]:
          - img [ref=e57]
          - generic [ref=e60]: Tables & Forms
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "QA Profile Form" [ref=e63] [cursor=pointer]:
              - /url: ./practice.html
              - img [ref=e65]
              - generic [ref=e68]: QA Profile Form
          - listitem [ref=e69]:
            - link "Companies Table" [ref=e70] [cursor=pointer]:
              - /url: ./webtable.html
              - img [ref=e72]
              - generic [ref=e75]: Companies Table
          - listitem [ref=e76]:
            - link "Tall Buildings Table" [ref=e77] [cursor=pointer]:
              - /url: ./webtable1.html
              - img [ref=e79]
              - generic [ref=e81]: Tall Buildings Table
          - listitem [ref=e82]:
            - link "Custom Dropdowns" [ref=e83] [cursor=pointer]:
              - /url: ./dropdowns.html
              - img [ref=e85]
              - generic [ref=e88]: Custom Dropdowns
          - listitem [ref=e89]:
            - link "Select Box Variants" [ref=e90] [cursor=pointer]:
              - /url: ./select-boxes.html
              - img [ref=e92]
              - generic [ref=e95]: Select Box Variants
          - listitem [ref=e96]:
            - link "Sortable Admin Table" [ref=e97] [cursor=pointer]:
              - /url: ./sortable.html
              - generic [ref=e99]: Sortable Admin Table
      - generic [ref=e100]:
        - paragraph [ref=e101]:
          - img [ref=e102]
          - generic [ref=e107]: Frames
        - list [ref=e108]:
          - listitem [ref=e109]:
            - link "Frames overview" [ref=e110] [cursor=pointer]:
              - /url: ../frames/index.html
              - img [ref=e112]
              - generic [ref=e114]: Frames overview
          - listitem [ref=e115]:
            - link "Multi-frame frameset" [ref=e116] [cursor=pointer]:
              - /url: ../frames/multi-frames.html
              - img [ref=e118]
              - generic [ref=e123]: Multi-frame frameset
          - listitem [ref=e124]:
            - link "Nested iframes" [ref=e125] [cursor=pointer]:
              - /url: ../frames/nested-iframes.html
              - img [ref=e127]
              - generic [ref=e131]: Nested iframes
          - listitem [ref=e132]:
            - link "Courses frameset" [ref=e133] [cursor=pointer]:
              - /url: ../frames/courses-frameset.html
              - generic [ref=e135]: Courses frameset
      - generic [ref=e136]:
        - paragraph [ref=e137]:
          - img [ref=e138]
          - generic [ref=e141]: Widgets
        - list [ref=e142]:
          - listitem [ref=e143]:
            - link "SVG locators" [ref=e144] [cursor=pointer]:
              - /url: ../widgets/svg.html
              - generic [ref=e146]: SVG locators
          - listitem [ref=e147]:
            - link "Shadow DOM" [ref=e148] [cursor=pointer]:
              - /url: ../widgets/shadow-dom.html
              - generic [ref=e150]: Shadow DOM
          - listitem [ref=e151]:
            - link "Calendar / date picker" [ref=e152] [cursor=pointer]:
              - /url: ../widgets/calendar.html
              - generic [ref=e154]: Calendar / date picker
          - listitem [ref=e155]:
            - link "Drag & drop Kanban" [ref=e156] [cursor=pointer]:
              - /url: ../widgets/dnd.html
              - generic [ref=e158]: Drag & drop Kanban
          - listitem [ref=e159]:
            - link "Toasts & notifications" [ref=e160] [cursor=pointer]:
              - /url: ../widgets/toasts.html
              - generic [ref=e162]: Toasts & notifications
          - listitem [ref=e163]:
            - link "Native dialogs" [ref=e164] [cursor=pointer]:
              - /url: ../widgets/dialogs.html
              - generic [ref=e166]: Native dialogs
      - generic [ref=e167]:
        - paragraph [ref=e168]:
          - img [ref=e169]
          - generic [ref=e172]: Network
        - list [ref=e173]:
          - listitem [ref=e174]:
            - link "Network interception" [ref=e175] [cursor=pointer]:
              - /url: ../network/intercept.html
              - generic [ref=e177]: Network interception
      - generic [ref=e178]:
        - paragraph [ref=e179]:
          - img [ref=e180]
          - generic [ref=e182]: Coming next
        - list [ref=e183]:
          - listitem [ref=e184]:
            - link "Windows & Tabs Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Windows & Tabs
              - generic: Soon
          - listitem [ref=e185]:
            - link "Upload & Download Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Upload & Download
              - generic: Soon
    - generic [ref=e186]:
      - generic [ref=e187]: © The Testing Academy · 2026
      - button "Toggle dark mode" [ref=e188] [cursor=pointer]:
        - img [ref=e189]
  - generic [ref=e191]:
    - banner [ref=e192]:
      - button "Open sidebar" [ref=e193] [cursor=pointer]:
        - img [ref=e194]
      - generic [ref=e196]:
        - link "Practice" [ref=e197] [cursor=pointer]:
          - /url: ../index.html
        - img [ref=e198]
        - generic [ref=e200]: Tables & Forms
        - img [ref=e201]
        - strong [ref=e203]: Custom Dropdowns
      - generic [ref=e204]:
        - generic [ref=e205] [cursor=pointer]:
          - checkbox "Locator markers" [checked] [ref=e206]
          - generic [ref=e207]: Locator markers
        - generic [ref=e208]: 3 dropdowns
        - button "Toggle dark mode" [ref=e209] [cursor=pointer]:
          - img [ref=e210]
          - img [ref=e212]
    - main [ref=e215]:
      - region "Custom dropdown practice" [ref=e216]:
        - generic [ref=e217]: Form practice · Custom dropdowns
        - heading "Custom dropdown practice" [level=1] [ref=e219]:
          - text: Custom
          - emphasis [ref=e220]: dropdown
          - text: practice
        - paragraph [ref=e221]:
          - text: Three custom-built dropdowns — not native
          - code [ref=e222]: <select>
          - text: elements. Each opens on click of a
          - code [ref=e223]: .select-trigger
          - text: ", shows options in a floating panel, and writes the chosen value back into the trigger. Build a reusable Playwright helper that handles all three before peeking at the solution."
      - region "Custom dropdowns workspace" [ref=e224]:
        - generic [ref=e225]:
          - generic [ref=e226]:
            - generic [ref=e227]: Programming language
            - generic [ref=e228]:
              - button "Programming language" [expanded] [active] [ref=e229] [cursor=pointer]:
                - generic [ref=e230]: Choose your preferred programming language
                - img [ref=e231]
              - listbox [ref=e233]:
                - option "Java" [ref=e234] [cursor=pointer]:
                  - text: Java
                  - img [ref=e235]
                - option "Python" [ref=e237] [cursor=pointer]:
                  - text: Python
                  - img [ref=e238]
                - option "JavaScript" [ref=e240] [cursor=pointer]:
                  - text: JavaScript
                  - img [ref=e241]
                - option "TypeScript" [ref=e243] [cursor=pointer]:
                  - text: TypeScript
                  - img [ref=e244]
                - option "Ruby" [ref=e246] [cursor=pointer]:
                  - text: Ruby
                  - img [ref=e247]
                - option "Go" [ref=e249] [cursor=pointer]:
                  - text: Go
                  - img [ref=e250]
                - option "C#" [ref=e252] [cursor=pointer]:
                  - text: C#
                  - img [ref=e253]
            - generic [ref=e255]:
              - generic [ref=e256]:
                - generic [ref=e257]: id
                - text: =lang-trigger
              - generic [ref=e258]:
                - generic [ref=e259]: data-testid
                - text: =dropdown-language · lang-trigger
              - generic [ref=e260]:
                - generic [ref=e261]: class
                - text: =select-trigger
              - generic [ref=e262]:
                - generic [ref=e263]: option
                - text: role=option · data-value=Java/Python/…
          - generic [ref=e264]:
            - generic [ref=e265]: Web framework
            - button "Web framework" [ref=e267] [cursor=pointer]:
              - generic [ref=e268]: Choose your preferred web framework
              - img [ref=e269]
            - generic [ref=e271]:
              - generic [ref=e272]:
                - generic [ref=e273]: id
                - text: =framework-trigger
              - generic [ref=e274]:
                - generic [ref=e275]: data-testid
                - text: =dropdown-framework · framework-trigger
          - generic [ref=e276]:
            - generic [ref=e277]: Experience level
            - button "Experience level" [ref=e279] [cursor=pointer]:
              - generic [ref=e280]: Select your experience level
              - img [ref=e281]
            - generic [ref=e283]:
              - generic [ref=e284]:
                - generic [ref=e285]: id
                - text: =experience-trigger
              - generic [ref=e286]:
                - generic [ref=e287]: data-testid
                - text: =dropdown-experience · experience-trigger
          - generic [ref=e288]:
            - button "Save selection" [ref=e289] [cursor=pointer]
            - button "Reset" [ref=e290] [cursor=pointer]
          - generic [ref=e291]: No selection yet — pick from the three dropdowns above.
        - complementary [ref=e292]:
          - generic [ref=e293]:
            - heading "What students should practise" [level=3] [ref=e294]
            - list [ref=e295]:
              - listitem [ref=e296]:
                - text: Click the
                - code [ref=e297]: .select-trigger
                - text: matching a placeholder, then click an
                - code [ref=e298]: option
                - text: by visible text.
              - listitem [ref=e299]:
                - text: "Write a reusable helper:"
                - code [ref=e300]: selectValue(page, label, value)
                - text: .
              - listitem [ref=e301]: Assert the trigger's visible text equals the chosen value after selection.
              - listitem [ref=e302]:
                - text: Confirm only one option is marked
                - code [ref=e303]: .is-selected
                - text: per dropdown.
          - group [ref=e304]:
            - generic "Playwright solution Helper-based pattern — reusable across all three dropdowns. Show solution" [ref=e305] [cursor=pointer]:
              - img [ref=e307]
              - generic [ref=e309]:
                - strong [ref=e310]: Playwright solution
                - generic [ref=e311]: Helper-based pattern — reusable across all three dropdowns.
              - generic [ref=e312]: Show solution
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test('Select Frames and Webtable',async({page})=>{
  4  | 
  5  |     // Open application
  6  |     await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
  7  | 
  8  |     // Maximize browser window
  9  |     await page.setViewportSize({ width: 1920, height: 1080 });
  10 | 
  11 |     // Wait for page load
  12 |     await page.waitForLoadState('domcontentloaded');
  13 |     // Click on the dropdown to open it
  14 |     await page.locator("//div[@data-testid='dropdown-language']").click();
  15 |     
  16 |     //Need to see all the dropdown list
> 17 |     await page.locator("//div[@data-testid='dropdown-language']//div.select-option").waitFor();
     |                                                                                      ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  18 |         
  19 |     // Select any one of the language from the dropdown options
  20 | });
  21 | 
```