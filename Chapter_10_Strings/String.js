const { PassThrough } = require("node:stream");

let url='https://fnpatch.idsnext.live/';  // Single Quotes
let url1="https://aap.vwo.com";           // Double Quotes
let str = `Hello`;                        //Backticks (template literals)

console.log(url);
console.log(url1);
console.log(str);

let name1="Narasimha";
let msg = `Hi ${name1}! 2 + 2 =${2+2}`;
console.log(msg); 

//Multiline String

let report =
 `Test: login
Status: Pass
Duration:320`
;
console.log(report);

//convert Number to string

let a=200;
b=String(a);
c=String(true);
console.log(typeof b);
console.log(typeof "Hi");           // "string" ✅
console.log(typeof 123);            // "number"
console.log(typeof true);           // "boolean" 
console.log(typeof c);              // String
console.log(typeof new String("Hi")); // "object"

