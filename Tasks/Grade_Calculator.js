// 1. Define the score
let score=70;

// 2. Initialize a variable to hold the letter grade
let letterGrade;

// 3. Logic: Determine the grade based on the numerical value
if (score > 100 || score < 0) {
    letterGrade = "Invalid (Score must be 0-100)";
} else if (score >= 90) {
    letterGrade = "A";
} else if (score >= 80) {
    letterGrade = "B";
} else if (score >= 70) {
    letterGrade = "C";
} else if (score >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

// 4. Output the result
console.log("Numerical Score:", score);
console.log("Letter Grade:", letterGrade);