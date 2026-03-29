/*
Playwright Result Summary Generator
You receive an array of Playwright step result objects in the 
format `{ name, status, durationMs }`, 
where status can be `"passed"`, `"failed"`, or `"skipped"`. 
Write a JavaScript function that prints a summary report with total steps,
 passed count, failed count, skipped count, total duration, and a comma-separated 
 list of failed step names.

Examples:
Input:
results = [{ name: "open login", status: "passed", durationMs: 400 }, 
{ name: "fill form", status: "failed", durationMs: 700 }, 
 { name: "submit", status: "skipped", durationMs: 0 }]
*/
function printSummary(results) {
  // Use reduce to aggregate all data in one go
  const summary = results.reduce((acc, step) => {
    acc.passed += step.status === "passed" ? 1 : 0;
    acc.failed += step.status === "failed" ? 1 : 0;
    acc.skipped += step.status === "skipped" ? 1 : 0;
    acc.totalDuration += step.durationMs;
    return acc;
  }, { passed: 0, failed: 0, skipped: 0, totalDuration: 0 });

  // Extract names of failed steps
  const failedNames = results
    .filter(step => step.status === "failed")
    .map(step => step.name)
    .join(", ");

  // Print the report
  console.log(`Total Steps: ${results.length} ` +
              `Passed: ${summary.passed} ` +
              `Failed: ${summary.failed} ` +
              `Skipped: ${summary.skipped} ` +
              `Total Duration: ${summary.totalDuration}ms ` +
              `Failed Steps: ${failedNames}`);
}

// Example Usage:
const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];

printSummary(results);