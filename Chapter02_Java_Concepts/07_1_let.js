//let is a keyword used to declare a block-scoped variable in JavaScript.
// It was introduced in ECMAScript 6 (ES6) to provide better scoping rules compared to var.
// The main difference between let and var is that let has block scope, while var has function scope.

// Example of using let:
let x = 10;
x = 20;
console.log(x); // Output: 20

// In the example above, we declare a variable x using let and assign it the value 10.
// We can reassign x to a new value (20) because let allows reassignment.
// However, if we try to redeclare x using let, it will result in an error:
// let x = 30; // This will throw a SyntaxError: Identifier 'x' has already been declared

//let rules:

//1. Variables declared with let are block-scoped, meaning they are only accessible within the block they are defined in.
//2. Variables declared with let can be reassigned, but cannot be redeclared within the same scope.
//3. Variables declared with let are not hoisted to the top of their block, unlike var which is hoisted to the top of its function scope.
//4. Variables declared with let are not accessible before they are declared (temporal dead zone), while var variables are hoisted and can be accessed before declaration (but will be undefined).

//Example of block scope with let:
if (true) {
    let y = 50;
    console.log(y); // Output: 50
}
// console.log(y); // This will throw a ReferenceError: y is not defined, because y is block-scoped to the if statement.

//example of temporal dead zone with let:
// console.log(z); // This will throw a ReferenceError: Cannot access 'z' before initialization
let z = 100;
console.log(z); // Output: 100

// In the example above, we try to access the variable z before it is declared, which results in a ReferenceError due to the temporal dead zone. After declaring z, we can access it without any issues.

//example of let in a loop:
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
// console.log(i); // This will throw a ReferenceError: i is not defined, because i is block-scoped to the for loop.

// In the example above, the variable i is declared with let inside the for loop, so it is only accessible within the loop. After the loop, trying to access i will result in a ReferenceError. 

// In summary, let is a powerful keyword for declaring variables in JavaScript with block scope and better scoping rules compared to var. It helps prevent issues related to variable hoisting and allows for safer variable declarations in modern JavaScript development.

//example of let redeclaration in different scopes:
let a = 10; 
if (true) {
    let a = 20;    // This is a different variable 'a' that is scoped to the if block.
    console.log(a); // Output: 20
}
console.log(a); // Output: 10, because the 'a' declared in the if block does not affect the 'a' declared in the outer scope.

