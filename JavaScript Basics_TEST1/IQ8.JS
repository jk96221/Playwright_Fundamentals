console.log(typeof undefined); // Output: "undefined"

console.log(typeof NaN); // Output: "number"

console.log(x); var x = 5; // Output: undefined

console.log(y); let y = 10;`  // Output: ReferenceError: Cannot access 'y' before initialization

let a;
console.log(a); // Output: undefined

const arr = [1, 2, 3]; 
arr.push(4); console.log(arr); // Output: [1, 2, 3, 4]



let 2name = "John"; // SyntaxError: Invalid or unexpected token
let _count = 10; console.log(_count); // Output: 10
let for = "test"; // SyntaxError: Unexpected token 'for'
let my-variable = "Hello"; // SyntaxError: Unexpected token '-'
let $value = 100; console.log($value); // Output: 100
let class = "Math"; // SyntaxError: Unexpected token 'class'

`5 === '5'
// Output: false (strict equality checks both value and type)

5 == '5'
// Output: true (loose equality performs type coercion)
