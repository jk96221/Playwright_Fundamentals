//Searching an array
//In simple terms, searching an array means finding the index of a specific value within the array. If the value is found, we return its index; if not, we return -1 to indicate that the value is not present in the array.

let arr = [1, 2, 3, 4, 5];

let target = 3;
let index = arr.indexOf(target);
console.log(index); // 2

target = 6;
index = arr.indexOf(target);
console.log(index); // -1   

//find method returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns undefined.

let nums = [10, 25, 20, 40, 50];
nums.find(x =>x > 20); // 25

//findindex method returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, it returns -1.

nums.findIndex(x => x > 20); // 1
