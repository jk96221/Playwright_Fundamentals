//var, let, and const are three different ways to declare variables in JavaScript.

//var is the oldest way to declare variables and has function scope. 
// It can be reassigned and redeclared within its scope.

var x = 10;
x = 20; // Reassigning x
var x = 30; // Redeclaring x
console.log(x); // Output: 30

//var rules:
//1. Variables declared with var are hoisted to the top of their scope and initialized with undefined.
//2. Variables declared with var can be redeclared and updated within its scope.
//3. var has function scope, meaning it is accessible within the function it is declared in.

//var function scope example:
function test() {
    var y = 10; 
    if (true) {
        var y = 20; // This y is the same as the y declared above due to function scope
        console.log(y); // Output: 20
    }
    console.log(y); // Output: 20
}   
test();

// var hoisting example:
console.log(z); // Output: undefined (due to hoisting)
var z = 10;

// var redeclaration example:
var a = 5;
var a = 10;
console.log(a); // Output: 10 (the second declaration overwrites the first one)

//var global scope example:

var globalVar = "I am a global variable";
function globalTest() {
    var globalVar = "I am not a global variable"; // This is a different variable due to function scope
    console.log(globalVar); // Output: I am a global variable (accessible in the function)
}
globalTest();

//console.log(globalVar); // Output: I am a global variable (accessible in the global scope)


