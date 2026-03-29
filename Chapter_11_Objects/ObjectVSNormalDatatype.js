//Primitive Data types always call by value

//Primitive, number, string, boolean, null, undefined

let a=10;
let b=a;
b=99;
console.log(a);  //10

//objects - copied by Reference, call by ref.
//Reference object, array, function.

let obj1={val1:25};
let obj2=obj1;
obj2.val1=150;

console.log(obj1);  //{ val1: 150 }
console.log(obj1.val1);  //150


let obj={Login:"IDS"};
console.log(Object.getOwnPropertyDescriptor(obj,"Login"));

//Output: { value: 'IDS', writable: true, enumerable: true, configurable: true }

