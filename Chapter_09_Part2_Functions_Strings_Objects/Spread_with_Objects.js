//Spread with Objects

//Copy an object

const obj1 = { name: "Alice", age: 20 };
const obj2 = { ...obj1 };

console.log(obj2);

//Merge objects

const o1 = { a: 1 };
const o2 = { b: 2 };

const merged = { ...o1, ...o2 };
console.log(merged); // { a: 1, b: 2 }

//Override properties
const user = { name: "Alice", age: 20 };
const updatedUser = { ...user, age: 25 };

console.log(updatedUser); // age becomes 25