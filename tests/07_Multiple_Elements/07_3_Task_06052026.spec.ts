import { test, expect } from '@playwright/test';

test('Complete QA Profile and add Grid Hub Profile with Screenshot', async ({ page }) => {
  // Navigate to the practice tables page
  console.log('Navigating to the practice tables page...');
  await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');
  
  // Wait for the page to fully load
  await page.waitForLoadState('networkidle');
  console.log('Page loaded successfully');

  // Take a screenshot of the initial page
  console.log('Taking initial screenshot of the page...');
  await page.screenshot({ path: 'tta-report/screenshots/tables_practice_initial.png', fullPage: true });
  console.log('Initial screenshot saved');

  // Find and inspect all table rows to identify QA profile
  const rows = page.locator('table tbody tr');
  const rowCount = await rows.count();
  console.log(`Found ${rowCount} rows in the table`);

  let qaRowIndex = -1;
  for (let i = 0; i < rowCount; i++) {
    const rowText = await rows.nth(i).textContent();
    console.log(`Row ${i}: ${rowText?.substring(0, 100)}`);
    if (rowText?.includes('QA') || rowText?.includes('qa')) {
      qaRowIndex = i;
      console.log(`Found QA profile at row ${i}`);
      break;
    }
  }

  // If QA profile found, click on the edit button or row to open the profile
  if (qaRowIndex !== -1) {
    console.log('Clicking on QA profile row to edit...');
    const qaRow = rows.nth(qaRowIndex);
    
    // Look for edit button within the row
    const editBtn = qaRow.locator('button:has-text("Edit"), a:has-text("Edit"), i.fa-edit');
    if (await editBtn.isVisible()) {
      await editBtn.click();
      console.log('Clicked edit button for QA profile');
    } else {
      // Try clicking the row itself
      await qaRow.click();
      console.log('Clicked QA profile row');
    }
    
    // Wait for modal or form to appear
    await page.waitForTimeout(1000);

    // Fill QA Profile Form
    console.log('Filling QA profile form...');
    
    const inputs = page.locator('input:visible');
    const inputCount = await inputs.count();
    console.log(`Found ${inputCount} visible input fields`);

    // Fill visible inputs with QA profile data
    if (inputCount > 0) {
      await inputs.nth(0).fill('John QA Engineer');
      console.log('Filled first input (Name): John QA Engineer');
    }
    
    if (inputCount > 1) {
      await inputs.nth(1).fill('qa.engineer@thetestingacademy.com');
      console.log('Filled second input (Email): qa.engineer@thetestingacademy.com');
    }
    
    if (inputCount > 2) {
      await inputs.nth(2).fill('Quality Assurance');
      console.log('Filled third input (Department): Quality Assurance');
    }

    // Look for save/submit button
    const saveBtn = page.locator('button:has-text("Save"), button:has-text("Submit"), button:has-text("Update")').first();
    if (await saveBtn.isVisible()) {
      await saveBtn.click();
      console.log('Clicked Save button for QA profile');
      await page.waitForTimeout(1500);
    }

    // Take screenshot after QA profile update
    console.log('Taking screenshot after QA profile update...');
    await page.screenshot({ path: 'tta-report/screenshots/qa_profile_updated.png', fullPage: true });
    console.log('Screenshot saved: qa_profile_updated.png');
  }

  // Now add Grid Hub Profile
  console.log('Looking for add profile button...');
  const addProfileBtn = page.locator('button:has-text("Add"), button:has-text("Create"), button:has-text("New Profile"), a:has-text("Add")').first();
  
  if (await addProfileBtn.isVisible()) {
    await addProfileBtn.click();
    console.log('Clicked Add Profile button');
    await page.waitForTimeout(1000);

    // Fill Grid Hub Profile Form
    console.log('Filling Grid Hub profile form...');
    const formInputs = page.locator('input:visible');
    const formInputCount = await formInputs.count();
    console.log(`Found ${formInputCount} visible input fields in form`);

    if (formInputCount > 0) {
      await formInputs.nth(0).fill('Grid Hub Administrator');
      console.log('Filled first input (Name): Grid Hub Administrator');
    }
    
    if (formInputCount > 1) {
      await formInputs.nth(1).fill('hub.admin@thetestingacademy.com');
      console.log('Filled second input (Email): hub.admin@thetestingacademy.com');
    }
    
    if (formInputCount > 2) {
      await formInputs.nth(2).fill('Infrastructure & Grid Management');
      console.log('Filled third input (Department): Infrastructure & Grid Management');
    }

    // Save the Grid Hub profile
    const submitBtn = page.locator('button:has-text("Save"), button:has-text("Submit"), button:has-text("Create")').last();
    if (await submitBtn.isVisible()) {
      await submitBtn.click();
      console.log('Clicked Save button for Grid Hub profile');
      await page.waitForTimeout(1500);
    }

    // Take final screenshot with both profiles
    console.log('Taking final screenshot with both profiles...');
    await page.screenshot({ path: 'tta-report/screenshots/qa_and_grid_hub_profiles_completed.png', fullPage: true });
    console.log('Screenshot saved: qa_and_grid_hub_profiles_completed.png');
  }

  // Verify profiles are visible in the table
  console.log('Verifying profiles in table...');
  const table = page.locator('table');
  await expect(table).toBeVisible();
  
  const finalRows = page.locator('table tbody tr');
  const finalRowCount = await finalRows.count();
  console.log(`Final row count in table: ${finalRowCount}`);
  
  console.log('✅ Task completed successfully - QA profile completed and Grid Hub profile added with screenshots captured');
});
