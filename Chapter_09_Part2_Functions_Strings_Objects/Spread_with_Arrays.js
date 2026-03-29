//1. Spread with Arrays
//Copy an array

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]

//Merge arrays
const a = [1, 2];
const b = [3, 4];

const merge = [...a, ...b];
console.log(merge); // [1, 2, 3, 4]

//Add elements
const nums1 = [2, 3];
const updated = [1, ...nums1, 4];

console.log(updated); // [1, 2, 3, 4]





