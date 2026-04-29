//Build a mini test suite runner that executes test cases 
// and generates a summary report. This question combines ALL 
// topics: var/let/const, if-else, switch, for loop, while loop, 
// do...while, operators (===, !==, &&, ||, ??, ternary), 
// typeof checks, and identifiers.

//Each test case has a name, expected value, actual value, 
// and comparison type (strictEqual, looseEqual, typeCheck, 
// truthy, lessThan). Run all tests, track pass/fail/error 
// counts, find consecutive passes from start (while loop), 
// find first failure (do...while), and print a comprehensive 
// report.

// ------------------------
// Mini Test Suite Runner (No Functions)
// ------------------------

// Define test cases
const testCases = [
  { name: "Test 1 - Strict Equal", expected: 5, actual: 5, compare: "strictEqual" },
  //{ name: "Test 2 - Loose Equal", expected: "5", actual: 5, compare: "looseEqual" },
  //{ name: "Test 3 - Type Check", expected: "number", actual: 10, compare: "typeCheck" },
  //{ name: "Test 4 - Truthy", expected: true, actual: "hello", compare: "truthy" },
  //{ name: "Test 5 - Less Than", expected: 10, actual: 7, compare: "lessThan" },
  //{ name: "Test 6 - Failure Case", expected: 10, actual: 15, compare: "lessThan" },
];

// Counters
let passed = 0;
let failed = 0;
let errored = 0;
const results = [];

// Run all tests
for (let i = 0; i < testCases.length; i++) {
  let test = testCases[i];
  let result = { name: test.name, status: "", message: "" };

  // Determine comparison type using switch
  switch (test.compare) {
    case "strictEqual":
      result.status = (test.actual === test.expected) ? "PASS" : "FAIL";
      result.message = `${test.actual} === ${test.expected}`;
      break;
    case "looseEqual":
      result.status = (test.actual == test.expected) ? "PASS" : "FAIL";
      result.message = `${test.actual} == ${test.expected}`;
      break;
    case "typeCheck":
      result.status = (typeof test.actual === test.expected) ? "PASS" : "FAIL";
      result.message = `typeof ${test.actual} === ${test.expected}`;
      break;
    case "truthy":
      result.status = (!!test.actual) ? "PASS" : "FAIL";
      result.message = `${test.actual} is truthy`;
      break;
    case "lessThan":
      result.status = (test.actual < test.expected) ? "PASS" : "FAIL";
      result.message = `${test.actual} < ${test.expected}`;
      break;
    default:
      result.status = "ERROR";
      result.message = `Unknown comparison type: ${test.compare}`;
  }

  // Track counts
  if (result.status === "PASS") passed++;
  else if (result.status === "FAIL") failed++;
  else errored++;

  // Store result
  results.push(result);
}

// Find consecutive passes from start using while loop
let consecutivePasses = 0;
let index = 0;
while (index < results.length && results[index].status === "PASS") {
  consecutivePasses++;
  index++;
}

// Find first failure using do...while loop
let firstFailureIndex = -1;
let j = 0;
if (results.length > 0) {
  do {
    if (results[j].status === "FAIL") {
      firstFailureIndex = j;
      break;
    }
    j++;
  } while (j < results.length);
}

// Generate report
console.log("==== TEST SUITE REPORT ====");
console.log(`Total tests: ${testCases.length}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Errored: ${errored}`);
console.log(`Consecutive passes from start: ${consecutivePasses}`);
console.log(`First failure index: ${firstFailureIndex !== -1 ? firstFailureIndex : "None"}`);
console.log("\n--- Detailed Results ---");
for (let k = 0; k < results.length; k++) {
  let r = results[k];
  console.log(`${r.status}: ${r.name} -> ${r.message}`);
}