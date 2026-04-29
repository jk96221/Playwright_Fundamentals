//Shallow and Deep Copying of Arrays

//Shallow Copying

let originalArray = [1, 2, 3];

let copy1=[...originalArray]; //Using Spread Operator
console.log(copy1); //Output: [1, 2, 3]

let copy2=originalArray.slice();  //Using slice() method
console.log(copy2); //Output: [1, 2, 3]

let copy3=originalArray.concat();  //Using concat() method
console.log(copy3); //Output: [1, 2, 3]

let copy4=Array.from(originalArray);  //Using Array.from() method
console.log(copy4); //Output: [1, 2, 3]

//Deep Copy 
let original1=[4,5,6,7];
let copy=original1;

copy.push(9); //Modifying copy1

console.log(original1);    
console.log(copy);

originalArray.push(99); //Modifying original array
console.log(originalArray); //Output: [1, 2, 3, 99] (original array is modified)
console.log(copy1); //Output: [1, 2, 3, 4] (copy1 remains unchanged)


//Deep Copying

let nestedArray = [[1, 2], [3, 4]];
console.log(nestedArray);
let deepCopy = JSON.parse(JSON.stringify(nestedArray)); //Using JSON methods for deep copying
console.log(deepCopy); //Output: [[1, 2], [3, 4]]


