//Redeclaration with var
var a = 10;
console.log(a); //10
var a = 20;
console.log(a); //20

//Redeclaration with let
let b = 10;
console.log(b); //10
let b = 20;
console.log(b); //SyntaxError: Identifier 'b' has already been declared

//Redeclaration with const
const c = 10;
console.log(c); //10
const c = 20;
console.log(c); //SyntaxError: Identifier 'c' has already been declared