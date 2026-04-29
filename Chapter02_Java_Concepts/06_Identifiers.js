var a=15;
a=30;    //a is an identifier and it can be reassigned with a new value.
console.log(a);

// identifiers are names used to identify variables, functions, and other entities in JavaScript. 
// They are used to store and manipulate data in a program. 
// In the example above, 'a' is an identifier that is initially assigned the value 15, 
// and then it is reassigned the value 30.

//15 is a literal and it cannot be reassigned with a new value. It is a constant.

//= is an assignment operator. It assigns the value on the right to the variable on the left. 

//rules for identifiers in JavaScript:
//1. An identifier can only contain letters, digits, underscores, and dollar signs.
//2. An identifier cannot start with a digit.
//3. An identifier cannot be a reserved keyword in JavaScript (like var, let, const, function, etc.).
//4. An identifier is case-sensitive (e.g., myVariable and myvariable are different identifiers).

//Examples of valid identifiers:
var myVariable = 10;
var _myVariable = 20;
var $myVariable = 30;
var myVariable2 = 40;

//Examples of invalid identifiers:
// var 2myVariable = 50; // Invalid: starts with a digit
// var my-Variable = 60; // Invalid: contains a hyphen
// var var = 70; // Invalid: 'var' is a reserved keyword
