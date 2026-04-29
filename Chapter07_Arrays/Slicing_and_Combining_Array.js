 //Array Slicing

 let a= [1,2,3,4,5,6];
//Start from index 2 and till the end of the array
    console.log(a.slice(3)); // [4,5,6]

//start from index 3 and end at index 5 (not included)    
console.log(a.slice(3, 5)); // [4,5]

//Combining Arrays

let b = [7,8,9];
let c = [10,11,12];

//Combining two arrays using concat method

let d = a.concat(b);

console.log(d); // [1,2,3,4,5,6,7,8,9]

// spread operator

let e = [...a, ...b, ...c];

console.log(e); // [1,2,3,4,5,6,7,8,9,10,11,12]

//Join method

//What is Join method is used to join all the elements of an array into a string. It takes an optional separator as an argument, which is used to separate the elements in the resulting string. If no separator is provided, the default separator is a comma.

let s= ["Hello", "World", "JavaScript"].join("=="); // "Hello==World==JavaScript"
console.log(s); // "Hello==World==JavaScript"



