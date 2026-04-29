//To String
let num = 123;
let str = num.toString(); 
console.log(str); // "123"

//Using parseInt()

let s1 = "123px";
let n1 = parseInt(s1); // 123
console.log(n1);

//Convert Other Types to String

String(true);        // "true"
String(null);        // "null"
String(undefined);   // "undefined"
String([1,2,3]);     // "1,2,3"