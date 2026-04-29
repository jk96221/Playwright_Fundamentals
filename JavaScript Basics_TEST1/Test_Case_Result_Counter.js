//After a test suite runs, you receive an array of test results 
// (strings: "pass", "fail", "skip"). 
// Write a JavaScript program using a for loop that counts 
// how many tests passed, failed, and were skipped. 
// Print a test report with total tests, counts, 
// pass rate percentage, and 
// a verdict (all passed → ready for release, ≤2 
// failures → review, >2 failures → block release).

// Counters
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Total number of tests
let totalTests = 3; // Example total tests, can be changed as needed

// Simulate test results using a for loop and if-else
for (let i = 1; i <= totalTests; i++) {
  // Simulate each test result (hardcoded for demonstration)
  let result;
  
  if (i === 1) result = "pass";
  else if (i === 2) result = "fail";
  else if (i === 3) result = "skip";
  
  // Count the results
  if (result === "pass") passCount++;
  else if (result === "fail") failCount++;
  else if (result === "skip") skipCount++;
}

// Calculate pass rate
let passRate = ((passCount / totalTests) * 100).toFixed(2);

// Determine verdict
let verdict;
if (failCount === 0) verdict = "Ready for release ✅";
else if (failCount <= 2) verdict = "Review required ⚠️";
else verdict = "Block release ❌";

// Print the test report
console.log("----- Test Report -----");
console.log("Total tests       :", totalTests);
console.log("Passed            :", passCount);
console.log("Failed            :", failCount);
console.log("Skipped           :", skipCount);
console.log("Pass rate         :", passRate + "%");
console.log("Verdict           :", verdict);
console.log("------------------------");