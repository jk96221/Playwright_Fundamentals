//What does the `??` (nullish coalescing) operator do?
//Returns the right operand if the left is null or undefined

let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // "Guest" ✅

let age = 0;
let defaultAge = age ?? 18;
console.log(defaultAge); // 0 ✅ (0 is NOT null/undefined)
