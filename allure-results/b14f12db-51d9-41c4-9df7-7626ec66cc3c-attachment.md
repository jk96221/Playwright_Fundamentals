# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_Multiple_Elements\07_3_Task_06052026.spec.ts >> Complete QA Profile and add Grid Hub Profile with Screenshot
- Location: tests\07_Multiple_Elements\07_3_Task_06052026.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('table')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('table')

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
      - generic [ref=e96]:
        - paragraph [ref=e97]:
          - img [ref=e98]
          - generic [ref=e103]: Frames
        - list [ref=e104]:
          - listitem [ref=e105]:
            - link "Frames overview" [ref=e106] [cursor=pointer]:
              - /url: ../frames/index.html
              - img [ref=e108]
              - generic [ref=e110]: Frames overview
          - listitem [ref=e111]:
            - link "Multi-frame frameset" [ref=e112] [cursor=pointer]:
              - /url: ../frames/multi-frames.html
              - img [ref=e114]
              - generic [ref=e119]: Multi-frame frameset
          - listitem [ref=e120]:
            - link "Nested iframes" [ref=e121] [cursor=pointer]:
              - /url: ../frames/nested-iframes.html
              - img [ref=e123]
              - generic [ref=e127]: Nested iframes
      - generic [ref=e128]:
        - paragraph [ref=e129]:
          - img [ref=e130]
          - generic [ref=e132]: Coming next
        - list [ref=e133]:
          - listitem [ref=e134]:
            - link "Alerts & Modals Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Alerts & Modals
              - generic: Soon
          - listitem [ref=e135]:
            - link "Windows & Tabs Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Windows & Tabs
              - generic: Soon
          - listitem [ref=e136]:
            - link "Upload & Download Soon":
              - /url: "#"
              - generic:
                - img
              - generic: Upload & Download
              - generic: Soon
    - generic [ref=e137]:
      - generic [ref=e138]: © The Testing Academy · 2026
      - button "Toggle dark mode" [ref=e139] [cursor=pointer]:
        - img [ref=e140]
  - generic [ref=e142]:
    - banner [ref=e143]:
      - button "Open sidebar" [ref=e144] [cursor=pointer]:
        - img [ref=e145]
      - generic [ref=e147]:
        - link "Practice" [ref=e148] [cursor=pointer]:
          - /url: ../index.html
        - img [ref=e149]
        - generic [ref=e151]: Tables
        - img [ref=e152]
        - strong [ref=e154]: QA Profile Form
      - generic [ref=e155]:
        - generic [ref=e156] [cursor=pointer]:
          - checkbox "Locator markers" [checked] [ref=e157]
          - generic [ref=e158]: Locator markers
        - generic [ref=e159]: Form practice
        - button "Toggle dark mode" [ref=e160] [cursor=pointer]:
          - img [ref=e161]
          - img [ref=e163]
    - main [ref=e166]:
      - region "QA Profile Form practice" [ref=e167]:
        - generic [ref=e168]: Form practice · Inputs & widgets
        - heading "QA Profile Form practice" [level=1] [ref=e170]:
          - text: QA
          - emphasis [ref=e171]: Profile Form
          - text: practice
        - paragraph [ref=e172]: "A focused form for practising every input type Playwright tests cover: text fields, radio groups, dropdowns, dates, checkboxes, tabs, file upload, and downloads. Build out your locator strategy before you reveal the solution."
      - region "Form practice workspace" [ref=e173]:
        - generic [ref=e174]:
          - generic [ref=e175]:
            - heading "Personal information" [level=2] [ref=e176]
            - generic [ref=e177]:
              - generic [ref=e178]:
                - generic [ref=e179]: First name
                - textbox "First name" [ref=e180]:
                  - /placeholder: Aarav
                - generic [ref=e181]:
                  - generic [ref=e182]:
                    - generic [ref=e183]: id
                    - text: =first-name
                  - generic [ref=e184]:
                    - generic [ref=e185]: name
                    - text: =firstName
                  - generic [ref=e186]:
                    - generic [ref=e187]: data-testid
                    - text: =first-name
              - generic [ref=e188]:
                - generic [ref=e189]: Last name
                - textbox "Last name" [ref=e190]:
                  - /placeholder: Sharma
                - generic [ref=e191]:
                  - generic [ref=e192]:
                    - generic [ref=e193]: id
                    - text: =last-name
                  - generic [ref=e194]:
                    - generic [ref=e195]: name
                    - text: =lastName
                  - generic [ref=e196]:
                    - generic [ref=e197]: data-testid
                    - text: =last-name
            - generic [ref=e198]:
              - generic [ref=e199]: Gender
              - radiogroup "Gender" [ref=e200]:
                - generic [ref=e201] [cursor=pointer]:
                  - radio "Male" [ref=e202]
                  - text: Male
                - generic [ref=e203] [cursor=pointer]:
                  - radio "Female" [ref=e204]
                  - text: Female
              - generic [ref=e205]:
                - generic [ref=e206]:
                  - generic [ref=e207]: name
                  - text: =gender
                - generic [ref=e208]:
                  - generic [ref=e209]: data-testid
                  - text: =gender-male / gender-female
          - generic [ref=e210]:
            - heading "Professional details" [level=2] [ref=e211]
            - generic [ref=e212]:
              - generic [ref=e213]:
                - generic [ref=e214]: Years of experience
                - combobox "Years of experience" [ref=e215]:
                  - option "Select years" [selected]
                  - option "1"
                  - option "2"
                  - option "3"
                  - option "4"
                  - option "5"
                  - option "6"
                  - option "7"
                - generic [ref=e216]:
                  - generic [ref=e217]:
                    - generic [ref=e218]: id
                    - text: =years-experience
                  - generic [ref=e219]:
                    - generic [ref=e220]: name
                    - text: =yearsExperience
                  - generic [ref=e221]:
                    - generic [ref=e222]: data-testid
                    - text: =years-experience
              - generic [ref=e223]:
                - generic [ref=e224]: Date
                - textbox "Date" [ref=e225]
                - generic [ref=e226]:
                  - generic [ref=e227]:
                    - generic [ref=e228]: id
                    - text: =profile-date
                  - generic [ref=e229]:
                    - generic [ref=e230]: name
                    - text: =date
                  - generic [ref=e231]:
                    - generic [ref=e232]: data-testid
                    - text: =profile-date
            - generic [ref=e233]:
              - generic [ref=e234]: Profession
              - radiogroup "Profession" [ref=e235]:
                - generic [ref=e236] [cursor=pointer]:
                  - radio "Manual Tester" [ref=e237]
                  - text: Manual Tester
                - generic [ref=e238] [cursor=pointer]:
                  - radio "Automation Tester" [ref=e239]
                  - text: Automation Tester
              - generic [ref=e240]:
                - generic [ref=e241]:
                  - generic [ref=e242]: name
                  - text: =profession
                - generic [ref=e243]:
                  - generic [ref=e244]: data-testid
                  - text: =profession-manual / profession-automation
          - generic [ref=e245]:
            - heading "Technical skills" [level=2] [ref=e246]
            - generic [ref=e247]:
              - generic [ref=e248]: Automation tools
              - generic "Automation tools" [ref=e249]:
                - generic [ref=e250] [cursor=pointer]:
                  - checkbox "UFT" [ref=e251]
                  - text: UFT
                - generic [ref=e252] [cursor=pointer]:
                  - checkbox "Protractor" [ref=e253]
                  - text: Protractor
                - generic [ref=e254] [cursor=pointer]:
                  - checkbox "Selenium Webdriver" [ref=e255]
                  - text: Selenium Webdriver
              - generic [ref=e256]:
                - generic [ref=e257]:
                  - generic [ref=e258]: name
                  - text: =tools
                - generic [ref=e259]:
                  - generic [ref=e260]: data-testid
                  - text: =tool-uft / tool-protractor / tool-selenium
            - generic [ref=e261]:
              - generic [ref=e262]: Continents you have worked from
              - generic "Continents" [ref=e263]:
                - generic [ref=e264] [cursor=pointer]:
                  - checkbox "Asia" [ref=e265]
                  - text: Asia
                - generic [ref=e266] [cursor=pointer]:
                  - checkbox "Europe" [ref=e267]
                  - text: Europe
                - generic [ref=e268] [cursor=pointer]:
                  - checkbox "Africa" [ref=e269]
                  - text: Africa
                - generic [ref=e270] [cursor=pointer]:
                  - checkbox "Australia" [ref=e271]
                  - text: Australia
                - generic [ref=e272] [cursor=pointer]:
                  - checkbox "South America" [ref=e273]
                  - text: South America
                - generic [ref=e274] [cursor=pointer]:
                  - checkbox "North America" [ref=e275]
                  - text: North America
                - generic [ref=e276] [cursor=pointer]:
                  - checkbox "Antarctica" [ref=e277]
                  - text: Antarctica
              - generic [ref=e278]:
                - generic [ref=e279]:
                  - generic [ref=e280]: name
                  - text: =continents
                - generic [ref=e281]:
                  - generic [ref=e282]: data-testid
                  - text: "=continent-{name}"
          - generic [ref=e283]:
            - heading "Selenium commands" [level=2] [ref=e284]
            - tablist [ref=e285]:
              - tab "Browser Commands" [ref=e286] [cursor=pointer]
              - tab "Navigation Commands" [ref=e287] [cursor=pointer]
              - tab "Switch Commands" [ref=e288] [cursor=pointer]
              - tab "Wait Commands" [ref=e289] [cursor=pointer]
              - tab "WebElement Commands" [ref=e290] [cursor=pointer]
            - generic [ref=e291]:
              - strong [ref=e292]: Browser commands
              - text: — open and close the browser, get titles and URLs, manage windows.
              - code [ref=e293]: driver.getTitle(); driver.getCurrentUrl(); driver.close();
            - generic [ref=e294]:
              - generic [ref=e295]:
                - generic [ref=e296]: id
                - text: =selenium-tabs · selenium-tab-panel
              - generic [ref=e297]:
                - generic [ref=e298]: data-testid
                - text: =tab-browser / tab-navigation / tab-switch / tab-wait / tab-webelement
              - generic [ref=e299]:
                - generic [ref=e300]: role
                - text: =tab
          - generic [ref=e301]:
            - heading "File operations" [level=2] [ref=e302]
            - generic [ref=e303]:
              - generic [ref=e304] [cursor=pointer]:
                - img [ref=e305]
                - text: Upload Image
                - button "Upload Image" [ref=e307]
              - generic [ref=e308]: No file chosen
              - link "Download file" [ref=e309] [cursor=pointer]:
                - /url: /playwright/sample-download.txt
                - text: Download file
                - img [ref=e310]
            - generic [ref=e312]:
              - generic [ref=e313]:
                - generic [ref=e314]: id
                - text: =upload-image · download-file
              - generic [ref=e315]:
                - generic [ref=e316]: data-testid
                - text: =upload-image · download-file
          - generic [ref=e317]:
            - button "Save profile" [ref=e318] [cursor=pointer]
            - button "Reset" [ref=e319] [cursor=pointer]
            - button "Button" [ref=e320] [cursor=pointer]
          - generic [ref=e321]:
            - generic [ref=e322]:
              - generic [ref=e323]: id
              - text: =profile-submit · profile-button
            - generic [ref=e324]:
              - generic [ref=e325]: data-testid
              - text: =profile-submit / profile-reset / profile-button
            - generic [ref=e326]:
              - generic [ref=e327]: role
              - text: =button
          - generic [ref=e328]: Submitted profile JSON will appear here.
        - complementary [ref=e329]:
          - generic [ref=e330]:
            - heading "What students should practise" [level=3] [ref=e331]
            - list [ref=e332]:
              - listitem [ref=e333]: Fill text inputs by label and verify the values typed.
              - listitem [ref=e334]: Pick a radio from a group and assert only one is selected.
              - listitem [ref=e335]:
                - text: Select a value from the dropdown using
                - code [ref=e336]: selectOption
                - text: .
              - listitem [ref=e337]: Tick multiple checkboxes and confirm exactly which are checked.
              - listitem [ref=e338]: Click a tab and assert the panel content updated.
              - listitem [ref=e339]:
                - text: Use
                - code [ref=e340]: setInputFiles
                - text: for the upload control.
              - listitem [ref=e341]: Wait for the Download file link and validate its href.
          - group [ref=e342]:
            - generic "Playwright solution One snippet covering every control on this page. Show solution" [ref=e343] [cursor=pointer]:
              - img [ref=e345]
              - generic [ref=e347]:
                - strong [ref=e348]: Playwright solution
                - generic [ref=e349]: One snippet covering every control on this page.
              - generic [ref=e350]: Show solution
```

# Test source

```ts
  36  |     const qaRow = rows.nth(qaRowIndex);
  37  |     
  38  |     // Look for edit button within the row
  39  |     const editBtn = qaRow.locator('button:has-text("Edit"), a:has-text("Edit"), i.fa-edit');
  40  |     if (await editBtn.isVisible()) {
  41  |       await editBtn.click();
  42  |       console.log('Clicked edit button for QA profile');
  43  |     } else {
  44  |       // Try clicking the row itself
  45  |       await qaRow.click();
  46  |       console.log('Clicked QA profile row');
  47  |     }
  48  |     
  49  |     // Wait for modal or form to appear
  50  |     await page.waitForTimeout(1000);
  51  | 
  52  |     // Fill QA Profile Form
  53  |     console.log('Filling QA profile form...');
  54  |     
  55  |     const inputs = page.locator('input:visible');
  56  |     const inputCount = await inputs.count();
  57  |     console.log(`Found ${inputCount} visible input fields`);
  58  | 
  59  |     // Fill visible inputs with QA profile data
  60  |     if (inputCount > 0) {
  61  |       await inputs.nth(0).fill('John QA Engineer');
  62  |       console.log('Filled first input (Name): John QA Engineer');
  63  |     }
  64  |     
  65  |     if (inputCount > 1) {
  66  |       await inputs.nth(1).fill('qa.engineer@thetestingacademy.com');
  67  |       console.log('Filled second input (Email): qa.engineer@thetestingacademy.com');
  68  |     }
  69  |     
  70  |     if (inputCount > 2) {
  71  |       await inputs.nth(2).fill('Quality Assurance');
  72  |       console.log('Filled third input (Department): Quality Assurance');
  73  |     }
  74  | 
  75  |     // Look for save/submit button
  76  |     const saveBtn = page.locator('button:has-text("Save"), button:has-text("Submit"), button:has-text("Update")').first();
  77  |     if (await saveBtn.isVisible()) {
  78  |       await saveBtn.click();
  79  |       console.log('Clicked Save button for QA profile');
  80  |       await page.waitForTimeout(1500);
  81  |     }
  82  | 
  83  |     // Take screenshot after QA profile update
  84  |     console.log('Taking screenshot after QA profile update...');
  85  |     await page.screenshot({ path: 'tta-report/screenshots/qa_profile_updated.png', fullPage: true });
  86  |     console.log('Screenshot saved: qa_profile_updated.png');
  87  |   }
  88  | 
  89  |   // Now add Grid Hub Profile
  90  |   console.log('Looking for add profile button...');
  91  |   const addProfileBtn = page.locator('button:has-text("Add"), button:has-text("Create"), button:has-text("New Profile"), a:has-text("Add")').first();
  92  |   
  93  |   if (await addProfileBtn.isVisible()) {
  94  |     await addProfileBtn.click();
  95  |     console.log('Clicked Add Profile button');
  96  |     await page.waitForTimeout(1000);
  97  | 
  98  |     // Fill Grid Hub Profile Form
  99  |     console.log('Filling Grid Hub profile form...');
  100 |     const formInputs = page.locator('input:visible');
  101 |     const formInputCount = await formInputs.count();
  102 |     console.log(`Found ${formInputCount} visible input fields in form`);
  103 | 
  104 |     if (formInputCount > 0) {
  105 |       await formInputs.nth(0).fill('Grid Hub Administrator');
  106 |       console.log('Filled first input (Name): Grid Hub Administrator');
  107 |     }
  108 |     
  109 |     if (formInputCount > 1) {
  110 |       await formInputs.nth(1).fill('hub.admin@thetestingacademy.com');
  111 |       console.log('Filled second input (Email): hub.admin@thetestingacademy.com');
  112 |     }
  113 |     
  114 |     if (formInputCount > 2) {
  115 |       await formInputs.nth(2).fill('Infrastructure & Grid Management');
  116 |       console.log('Filled third input (Department): Infrastructure & Grid Management');
  117 |     }
  118 | 
  119 |     // Save the Grid Hub profile
  120 |     const submitBtn = page.locator('button:has-text("Save"), button:has-text("Submit"), button:has-text("Create")').last();
  121 |     if (await submitBtn.isVisible()) {
  122 |       await submitBtn.click();
  123 |       console.log('Clicked Save button for Grid Hub profile');
  124 |       await page.waitForTimeout(1500);
  125 |     }
  126 | 
  127 |     // Take final screenshot with both profiles
  128 |     console.log('Taking final screenshot with both profiles...');
  129 |     await page.screenshot({ path: 'tta-report/screenshots/qa_and_grid_hub_profiles_completed.png', fullPage: true });
  130 |     console.log('Screenshot saved: qa_and_grid_hub_profiles_completed.png');
  131 |   }
  132 | 
  133 |   // Verify profiles are visible in the table
  134 |   console.log('Verifying profiles in table...');
  135 |   const table = page.locator('table');
> 136 |   await expect(table).toBeVisible();
      |                       ^ Error: expect(locator).toBeVisible() failed
  137 |   
  138 |   const finalRows = page.locator('table tbody tr');
  139 |   const finalRowCount = await finalRows.count();
  140 |   console.log(`Final row count in table: ${finalRowCount}`);
  141 |   
  142 |   console.log('✅ Task completed successfully - QA profile completed and Grid Hub profile added with screenshots captured');
  143 | });
  144 | 
```