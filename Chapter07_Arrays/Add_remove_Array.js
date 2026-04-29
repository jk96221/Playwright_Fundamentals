//Add elements to an array

let arr = [1, 2, 3];

arr.push(4);
console.log(arr); // [1, 2, 3, 4]

//Add to the beginning of the array
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4]

//add element to the middle of the array
//Slice syntax: array.splice(start, deleteCount, item1, item2, ...)

arr.splice(2, 0, 'a',);  
console.log(arr); // [0, 1, 'a', 2, 3, 4]

//add multiple elements to the middle of the array
arr.splice(1, 0, 'b', 'c');
console.log(arr); // [0, 'b', 'c', 1, 'a', 2, 3, 4]

//Remove elements from an array

//Remove from the end of the array
arr.pop();
console.log(arr); // [0, 'b', 'c', 1, 'a', 2, 3]

//Remove from the beginning of the array
arr.shift();
console.log(arr); // ['b', 'c', 1, 'a', 2, 3]

//Remove element from the middle of the array
arr.splice(1, 1); // Remove 1 element at index 1
console.log(arr); // ['b', 1, 'a', 2, 3]

//remove multiple elements from the middle of the array
arr.splice(0, 2); // Remove 2 elements starting from index 0
console.log(arr); // ['a', 2, 3]


