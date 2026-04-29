//Arry Length

const { arrayBuffer } = require("node:stream/consumers");

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5

console.log(arr);
// Output: [1, 2, 3, 4, 5]

//adding elements to the array

arr.push(6);
console.log(arr);
// Output: [1, 2, 3, 4, 5, 6]

//removing elements from the array

arr.pop();
console.log(arr);
// Output: [1, 2, 3, 4, 5]

//add elements to the beginning of the array

arr.unshift(0);
console.log(arr);
// Output: [0, 1, 2, 3, 4, 5]

//remove elements from the beginning of the array

arr.shift();
console.log(arr);
// Output: [1, 2, 3, 4, 5]

//Adding elements to the middle of the array

arr.splice(2, 1);  ///removing 1 element at index 2
console.log(arr);
// Output: [1, 2, 4, 5]

arr.splice(2, 0, 3, 6); //adding 3 and 6 at index 2
console.log(arr);
// Output: [1, 2, 3, 6, 4, 5]



