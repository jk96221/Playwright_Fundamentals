//every element is greater than 6?

let arr3 = [1, 2, 3, 4, 5];
let isGreaterThanSix = arr3.every((num) => num > 6);
console.log(isGreaterThanSix); // false

//another way to check if every element is greater than 0

[1, 2, 3, 4, 5].every((num) => num > 0); // true

//some element is greater than 4?

let arr4 = [1, 2, 3, 4, 5];
let isGreaterThanFour = arr4.some((num) => num > 4);
console.log(isGreaterThanFour); // true

//another way to check if some element is greater than 4

[1, 2, 3, 4, 5].some((num) => num > 4); // true