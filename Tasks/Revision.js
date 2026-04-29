let score = 75;

let letterGrande;

if (score > 100 || score < 0) {

    letterGrade = "Invalid Grade (Score must be in 0-100)";
}
else if (score >= 90) {
    letterGrade = "A";
}
else if (score >= 80) {
    letterGrade = "B";
}
else if (score >= 70) {
    letterGrade = "C";
}
else if (score >= 60) {
    letterGrade = "D";
}
else {
    letterGrade = "F";
}

console.log("Numerical Score:", score);
console.log("Letter Grade:", letterGrade);
