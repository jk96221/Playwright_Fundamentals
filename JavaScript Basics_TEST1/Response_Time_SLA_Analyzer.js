//As a performance tester, you collect API response times 
// in milliseconds. Write a JavaScript program using 
// a while loop that analyzes an array of response times 
// and prints a performance report with min, max, average, 
// and how many responses breached the SLA threshold (> 500ms). 
// Use comparison operators for min/max tracking.

let count = 0;           // Number of responses entered
let min = null;          // Minimum response time
let max = null;          // Maximum response time
let sum = 0;             // Sum of response times
let slaBreaches = 0;     // Count of SLA breaches
const SLA_THRESHOLD = 500;

let moreInput = true;

while (moreInput) {
    // Read response time (in ms)
    let input = prompt("Enter API response time in ms (or leave blank to finish):");
    
    // Stop if input is empty
    if (input === null || input.trim() === "") {
        moreInput = false;
        break;
    }

    let responseTime = Number(input);

    // Validate input
    if (isNaN(responseTime) || responseTime < 0) {
        alert("Please enter a valid non-negative number!");
        continue;
    }

    // Track min and max
    if (min === null || responseTime < min) {
        min = responseTime;
    }
    if (max === null || responseTime > max) {
        max = responseTime;
    }

    // Update sum and count
    sum += responseTime;
    count++;

    // Check SLA breach
    if (responseTime > SLA_THRESHOLD) {
        slaBreaches++;
    }
}

// Calculate average
let average = count > 0 ? sum / count : 0;

// Print report
if (count > 0) {
    console.log("API Performance Report:");
    console.log("Minimum Response Time: " + min + " ms");
    console.log("Maximum Response Time: " + max + " ms");
    console.log("Average Response Time: " + average.toFixed(2) + " ms");
    console.log("SLA Breaches (> " + SLA_THRESHOLD + " ms): " + slaBreaches);
} else {
    console.log("No response times entered.");
}