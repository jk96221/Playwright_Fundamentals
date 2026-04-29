function calculate(a,b, operation){
    return operation(a,b);
}

let sum = calculate(5, 3, function(x,y){
    return x + y;
});
console.log("Sum: " + sum);

//Async 

console.log("A: Test suite started");

setTimeout(function() {
    console.log("B: Running test cases...");
}, 2000);
console.log("C: Test suite finished");
