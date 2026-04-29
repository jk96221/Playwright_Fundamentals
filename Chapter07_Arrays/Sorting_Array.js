//Array Sorting

let friuts = ["Banana", "Apple", "Mango", "Cherry"];

//Sorting in Ascending order

friuts.sort();
console.log(friuts);  //[ 'Apple', 'Banana', 'Cherry', 'Mango' ]

//Sorting in Descending order

friuts.sort().reverse();
console.log(friuts);  //[ 'Mango', 'Cherry', 'Banana', 'Apple' ]    

//numeric sorting

let numbers = [40, 100, 1, 5, 25, 10];

numbers.sort();
console.log(numbers);  //[ 1, 10, 100, 25, 40, 5 ]
//This is not the expected output because sort() method sorts the elements as strings by default. 
// To sort numbers correctly, we need to provide a compare function.

//Sorting in Ascending order
let numbers1 = [40, 100, 1, 5, 25, 10];
numbers1.sort((a, b) => a - b);
console.log(numbers1);  //[ 1, 5, 10, 25, 40, 100 ]

//Sorting in Descending order
numbers1.sort((a, b) => b - a);
console.log(numbers1);  //[ 100, 40, 25, 10, 5, 1 ]

