//empty Array
let fruits = [];
console.log(fruits); // []

//Array with elements
let colors = ['red', 'green', 'blue'];
console.log(colors); // ['red', 'green', 'blue']

//array with numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]    


//Array with mixed data types
let mixedArray = [42, 'hello', true, null];
console.log(mixedArray); // [42, 'hello', true, null] 

//Array with nested arrays
let nestedArray = [[1, 2], ['a', 'b'], [true, false]];
console.log(nestedArray); // [[1, 2], ['a', 'b'], [true, false]]

//Array with objects
let objectArray = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
console.log(objectArray); // [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]


//Array with undefined values
let undefinedArray = [undefined, undefined, undefined];
console.log(undefinedArray); // [undefined, undefined, undefined]

//Array with null values
let nullArray = [null, null, null];
console.log(nullArray); // [null, null, null]

//Array with functions
let functionArray = [function() { return 'Hello'; }, function() { return 'World'; }];
console.log(functionArray); // [function() { return 'Hello'; }, function() { return 'World'; }]

//Array with different data types
let diverseArray = [42, 'hello', true, null, [1, 2], { name: 'Alice' }, function() { return 'Hello'; }];
console.log(diverseArray); // [42, 'hello', true, null, [1, 2], { name: 'Alice' }, function() { return 'Hello'; }]

//Array with duplicate values
let duplicateArray = [1, 2, 2, 3, 4, 4, 5];
console.log(duplicateArray); // [1, 2, 2, 3, 4, 4, 5]

//Array with special characters
let specialCharArray = ['@', '#', '$', '%', '^'];
console.log(specialCharArray); // ['@', '#', '$', '%', '^'] 

//Array with boolean values
let booleanArray = [true, false, true, false];
console.log(booleanArray); // [true, false, true, false]

//Array with empty strings
let emptyStringArray = ['', '', ''];
console.log(emptyStringArray); // ['', '', '']

//Array with whitespace strings
let whitespaceStringArray = [' ', '   ', '\t'];
console.log(whitespaceStringArray); // [' ', '   ', '\t']

//Array with special numeric values
let specialNumericArray = [NaN, Infinity, -Infinity];
console.log(specialNumericArray); // [NaN, Infinity, -Infinity]

//Array with large numbers
let largeNumberArray = [1000000, 2000000, 3000000];
console.log(largeNumberArray); // [1000000, 2000000, 3000000]

//array constructor
let arrayConstructor = new Array(5);
console.log(arrayConstructor); // [ <5 empty items> ]

//array constructor with elements
let arrayConstructorWithElements = new Array(1, 2, 3, 4, 5);
console.log(arrayConstructorWithElements); // [1, 2, 3, 4, 5]   

//Array with  literals

let arrayLiteral = [1, 2, 3, 4, 5];
console.log(arrayLiteral); // [1, 2, 3, 4, 5]
