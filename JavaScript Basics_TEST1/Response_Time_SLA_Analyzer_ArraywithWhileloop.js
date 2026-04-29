// Sample array of API response times in milliseconds
const responseTimes = [120, 450, 510, 320, 670, 200, 480, 505];

let i = 0;
let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let slaBreaches = 0;
const SLA_THRESHOLD = 500;

while (i < responseTimes.length) {
    let current = responseTimes[i];

    // Track min and max using comparison operators
    if (current < min) {
        min = current;
    }
    if (current > max) {
        max = current;
    }

    // Add to sum for average calculation
    sum += current;

    // Count SLA breaches
    if (current > SLA_THRESHOLD) {
        slaBreaches++;
    }

    i++; // move to next element
}

// Calculate average
let average = sum / responseTimes.length;

// Print performance report
console.log("API Performance Report:");
console.log("Minimum Response Time: " + min + " ms");
console.log("Maximum Response Time: " + max + " ms");
console.log("Average Response Time: " + average.toFixed(2) + " ms");
console.log("SLA Breaches (> " + SLA_THRESHOLD + " ms): " + slaBreaches);