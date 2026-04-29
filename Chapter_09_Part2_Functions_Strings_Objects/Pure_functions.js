//Pure functions
//A Pure function always returns the same output for the same input and has no side effects.

// Pure - no side effects, Predictable output
function calculatePassRate(total, passed)
{
    return((passed / total)*100).toFixed(2);
}
console.log(calculatePassRate(10,7));
console.log(calculatePassRate(10,7));

//Impure - depends on External state
let threshold=90;
function isPassing(score)
{
    return score>=threshold;   // depends on External variable
}
console.log(isPassing(threshold));

threshold=75;
console.log(isPassing(threshold));
