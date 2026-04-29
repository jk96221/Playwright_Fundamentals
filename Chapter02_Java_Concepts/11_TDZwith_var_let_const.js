//TDZ with var
console.log(a); //undefined
var a = 10;
console.log(a); //10

//TDZ with let
console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); //20

//TDZ with const
console.log(c); //ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); //30





