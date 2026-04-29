const { test, expect } = require('@playwright/test');

test('XPath Axes Example', async ({ page }: { page: any }) => {
  await page.setContent(`
    <div id="container">
      <div class="parent">
        <span class="child">Child 1</span>
        <span class="child">Child 2</span>
      </div>
      <div class="sibling">Sibling Div</div>
    </div>
  `);

  // 1. Child Axis
  const children = await page.locator('//div[@class="parent"]/child::span');
  await expect(children).toHaveCount(2);

  // 2. Parent Axis
  const parent = await page.locator('//span[text()="Child 1"]/parent::div');
  await expect(parent).toHaveClass('parent');

  // 3. Following-Sibling Axis
  const sibling = await page.locator('//div[@class="parent"]/following-sibling::div');
  await expect(sibling).toHaveText('Sibling Div');

  // 4. Ancestor Axis
  const ancestor = await page.locator('//span[text()="Child 2"]/ancestor::div[@id="container"]');
  await expect(ancestor).toBeVisible();

  // 5. Descendant Axis
  const descendants = await page.locator('//div[@id="container"]/descendant::span');
  await expect(descendants).toHaveCount(2);
});