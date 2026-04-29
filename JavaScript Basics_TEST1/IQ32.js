console.log(2 ** 3); 
// 8 (2 multiplied by itself 3 times)
//Explain the output of the above code. 
// The `**` operator is the exponentiation operator in JavaScript. 
// It raises the left operand (2) to the power of the right 
// operand (3). So, 2 ** 3 means 2 multiplied by itself 3 times, 
// which equals 8.

console.log('5' + 3);
// '53' (the number 3 is converted to a string and 
// concatenated with '5')
// In this case, the `+` operator is used for string concatenation. 
// When one of the operands is a string, JavaScript converts the other operand to a string as well. 
// So, the number 3 is converted to the string '3', and then it is concatenated with '5', resulting in '53'.    



console.log('5' - 3); 
// 2 (the string '5' is converted to a number and 
// then 3 is subtracted from it)

console.log('5' * 3); 
// 15 (the string '5' is converted to a number and then multiplied by 3)

//Q: What does the `typeof` operator return for an array?
// Ans: The `typeof` operator returns 'object' for an array in JavaScript.

console.log(true + true);
// 2 (true is treated as 1, so 1 + 1 equals 2)

console.log(0 || 'hello');
// 'hello' (the `||` operator returns the first truthy value,
// and 0 is falsy, so it returns 'hello')

console.log(0 && 'hello');
// 0 (the `&&` operator returns the first falsy value, and 0 is falsy, so it returns 0)

console.log(0 ?? 'hello');
// 0 (the `??` operator returns the first defined value, and 0 is defined, so it returns 0)

console.log(10 % 3);
// 1 (the `%` operator returns the remainder of the division of 10 by 3, which is 1)


