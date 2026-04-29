//In automation testing, API calls sometimes fail due to network 
// issues. Write a JavaScript program that simulates retrying 
// a failed API call using a do...while loop. 
// The program should retry a maximum of 5 times. 
// Simulate random success/failure using Math.random() 
// (40% chance of success: randomValue > 0.6). 
// Log each attempt and print the final result.

let maxRetries = 5;  // Maximum number of retries
let attempt = 0;  // Counter for attempts
let success = false;  // Flag to track success of API call
do {
    attempt++;       // Increment attempt counter
    let randomValue = Math.random();  // Simulate random success/failure
    
    console.log(`Attempt ${attempt}: Random Value = ${randomValue.toFixed(2)}`);
    // Check if the API call is successful (40% chance of success)

    if (randomValue > 0.6) // Simulate a successful API call
        {
        success = true;  // Set success flag to true
        console.log("API call succeeded!");  // Log success message
        break; 
    }
} while (attempt < maxRetries);

if (!success) {
    console.log("API call failed after maximum retries.");
}   

