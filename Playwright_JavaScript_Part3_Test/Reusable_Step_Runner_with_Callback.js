/*
Reusable Step Runner with Callback
Write a higher-order function `runStep(stepName, actionFn)` that logs the start of a step, 
executes the callback, and returns an object in the format `{ stepName, passed, message }`. 
If the callback throws an error, catch it and return `passed: false` with the error message.

Examples:
Input:
runStep("open dashboard", () => "Page loaded")
*/
async function runStep(stepName, actionFn) {
  console.log(`Starting step: ${stepName}...`);
  
  try {
    // Await the actionFn in case it is an asynchronous operation (common in Playwright)
    const result = await actionFn();
    
    return {
      stepName: stepName,
      passed: true,
      message: result
    };
  } catch (error) {
    // If an error is thrown, we catch it and mark the step as failed
    return {
      stepName: stepName,
      passed: false,
      message: error.message || "An unknown error occurred"
    };
  }
}

// Example Usage:
// Success case
runStep("open dashboard", () => "Page loaded").then(console.log);

// Failure case
runStep("login", () => { throw new Error("Invalid credentials"); }).then(console.log);
