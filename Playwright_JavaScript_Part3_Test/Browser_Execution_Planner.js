/* Browser Execution Planner
You have an array of all supported browsers and another array of temporarily blocked browsers. 
Write a function that returns the runnable browsers, the blocked browsers, and 
a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.

Examples:
Input:
allBrowsers = ["chromium", "firefox", "webkit"], blockedBrowsers = ["firefox"]
*/

function getExecutionPlan(allBrowsers, blockedBrowsers) {
  // Use filter to separate the lists
  const blocked = allBrowsers.filter(browser => blockedBrowsers.includes(browser));
  const runnable = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));

  // Build the printable execution plan string
  const planString = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

  return {
    runnable,
    blocked,
    planString
  };
}

// Example Usage:
const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

const plan = getExecutionPlan(allBrowsers, blockedBrowsers);
console.log(plan.planString);
// Output: "Run on: chromium, webkit | Skip: firefox"
