//Normalize Locator Error Messages
/*Given a raw Playwright error message string, write a function that trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.

Examples:
Input:
rawMessage = " Locator not found after TIMEOUT "
*/

function categorizeErrorMessage(rawMessage) {
  // 1. Normalize: trim whitespace, lowercase, and replace multiple spaces with one
  const normalized = rawMessage
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');

  // 2. Determine category
  let category = "GENERAL";
  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  }

  // 3. Print the results
  console.log(`Normalized: "${normalized}"`);
  console.log(`Category: ${category}`);
  
  return { normalized, category };
}

// Example Usage:
const rawMessage = "   Locator   not found   after    TIMEOUT   ";
categorizeErrorMessage(rawMessage);