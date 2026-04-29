//Array Transforming Methods

//1. map() method
//map() method creates a new array by applying a function to each element of the original array. 
// It does not modify the original array.
let score_cards = [80, 90, 70, 85];

let grade_cards = score_cards.map(score => {
    if(score >= 90) {
        return 'A';
    } else if(score >= 80) {
        return 'B';
    } else if(score >= 70) {
        return 'C';
    } else {
        return 'D';
    }
});

console.log(grade_cards); // Output: ['B', 'A', 'C', 'B']

//anyother way to do the same thing
let score_cards2 = [99, 65,88,56,75];
let grade_cards1= score_cards2.map(s => s >= 90 ? 'A' : s >= 80 ? 'B' : s >= 70 ? 'C' : 'D');
console.log(grade_cards1); // Output: ['B', 'A', 'C', 'B']


//2. filter() method
//filter() method creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1, 2, 3, 4, 5, 6];

let even_numbers = numbers.filter(num => num % 2 === 0);
console.log(even_numbers); // Output: [2, 4, 6]

//3. reduce() method
//reduce() method executes a reducer function on each element of the array, resulting in a single output value.

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 21

//4. forEach() method
//forEach() method executes a provided function once for each array element. It does not return a new array.
numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6, 8, 10, 12

//5. sort() method
//sort() method sorts the elements of an array in place and returns the sorted array.
let fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

//6. reverse() method
//reverse() method reverses the order of the elements in an array in place.
fruits.reverse();
console.log(fruits); // Output: ['date', 'cherry', 'banana', 'apple']

//7. concat() method
//concat() method is used to merge two or more arrays. It does not change the existing arrays, but instead returns a new array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let merged_array = array1.concat(array2);
console.log(merged_array); // Output: [1, 2, 3, 4, 5, 6]




