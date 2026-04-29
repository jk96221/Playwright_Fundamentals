//Iterate over an array using for loop

console.log("Iterating over an array using for loop:");

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("Iterating over an array using for...of loop:");
//Iterate over an array using for...of loop

for (let fruit of fruits) {
    console.log(fruit);
}

console.log("Iterating over an array using forEach method:");
//Iterate over an array using forEach method

fruits.forEach(function(fruit) {
    console.log(fruit);
});

//print the index and the value of each element in the array using forEach method

console.log("Iterating over an array using forEach method with index:");
let fruits1 = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
fruits1.forEach((fruit, index) => 
    {
    console.log(`${index}: ${fruit}`);    
}
);

// for...of loop with entries() method to get index and value

console.log("Iterating over an array using for...of loop with entries() method:");

for(let [i, fruit] of fruits1.entries()) {
    console.log(i, fruit);
}
