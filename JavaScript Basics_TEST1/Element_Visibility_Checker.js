//In UI automation (Cypress/Playwright), 
// you often need to validate element states before interacting 
// with them. Write a JavaScript program that checks 
// an element's properties (isPresent, isDisplayed, isEnabled) 
// and prints the appropriate action a QA engineer should take.
//  Use strict equality (===), logical operators (&&, ||), 
// and the ternary operator for severity level.

//States: READY (all true), 
// DISABLED (present+displayed but not enabled), 
// HIDDEN (present but not displayed), NOT FOUND (not present).
//Severity: CRITICAL (not present), 
// WARNING (not displayed or not enabled), OK (all good).

// Simulated element properties
let isPresent = true;    // Change to true/false to test
let isDisplayed = true;  // Change to true/false to test
let isEnabled = true;    // Change to true/false to test

// Determine element state
let elementState = 
  (isPresent === false) ? "NOT FOUND" :
  (isDisplayed === false) ? "HIDDEN" :
  (isEnabled === false) ? "DISABLED" :
  "READY";

// Determine severity level
let severity = 
  (isPresent === false) ? "CRITICAL" :
  (isDisplayed === false || isEnabled === false) ? "WARNING" :
  "OK";

// Suggest QA action based on state
let action =
  (elementState === "READY") ? "Proceed with interaction ✅" :
  (elementState === "DISABLED") ? "Check why element is disabled ⚠️" :
  (elementState === "HIDDEN") ? "Investigate visibility or locator ⚠️" :
  "Element not found! Check selector or page load ❌";

// Print QA report
console.log("Element State  :", elementState);
console.log("Severity Level :", severity);
console.log("Suggested Action:", action);

