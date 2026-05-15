import { test, expect, Locator } from '@playwright/test';

test.describe('SVG Concepts - Basic Test', () => {

    const url = 'https://www.flipkart.com/search';

    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        // Fill search input
        await page.locator('input[name="q"]').fill('macmini');

        // Locate SVG elements
        const svgElements: Locator = page.locator('svg');

        // Assert SVG exists
        await expect(svgElements.first()).toBeVisible();

        // Click first SVG
        await svgElements.first().click();

        // Wait for observation
        await page.waitForTimeout(5000);
    });

});