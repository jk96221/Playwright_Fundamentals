console.log(a);
var a = 10;

//Phase 1: Memoery Creation
var a = undefined;
var b = undefined;

//Phase 2: Code Execution
console.log(a); //undefined
var a = 10;
var b = 20;

console.log(a); //10  //Change the value of a
console.log(b); //20  //Change the value of b

//Example 2: Let Variable
console.log(x); //ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); //10 //Change the value of x

//Example 3: const variable
console.log(y); //ReferenceError:Cannot access 'y' before initialization
const y = 20;
console.log(y); //20 //Change the value of y

