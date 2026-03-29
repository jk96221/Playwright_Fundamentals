//length

let str = "HELLO IDS NEXT BUSINESS SOLUTIONS PVT LTD";

console.log(str.length); // 41

//Access by index

console.log(str[3]);
console.log(str.at(-6));

//Strings are immutable (important property)

let str1 = "Hello";
str[0] = "h";

console.log(str1); // "Hello" (no change)

//Difference between property and method

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());