//funtion with var
//Step 1: Definition of function
function test() {
    console.log(a); //undefined 
    var a = 10;
    console.log(a); //10
}

//Step 2: Calling the function
test();
console.log("======================================================================");
//function with let
//Step 1: Definition of function
function test1() {
    console.log(b); //ReferenceError: Cannot access 'b' before initialization
    let b = 20;
    console.log(b); //20
}

//Step 2: Calling the function
test1();

console.log("======================================================================");
//function with const
//Step 1: Definition of function
function test2() {
    console.log(c); //ReferenceError: Cannot access 'c' before initialization
    const c = 30;
    console.log(c); //30
}

//Step 2: Calling the function
test2();

