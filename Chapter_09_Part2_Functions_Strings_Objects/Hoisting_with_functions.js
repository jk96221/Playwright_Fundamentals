//Function Declaration (Fully Hoisted)
sayHello();

function sayHello() {
    console.log("Hello!");
}

//2. Function Expression (Not Fully Hoisted ❌)

sayHi(); // ❌ Error

let sayHi = function() {
    console.log("Hi!");
};

//3. Arrow Function (Same as Expression ❌)
greet(); // ❌ Error

const greet = () => {
    console.log("Hello!");
};

//Reason:
//const is hoisted but not initialized (Temporal Dead Zone)
//Cannot use before declaration

//Best Practice
const add = (a, b) => a + b;

console.log(add(2, 3));