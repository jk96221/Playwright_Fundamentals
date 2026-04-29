//FunctionScope with var
var name1 = "Narasimha";
function show() {
    console.log(name1); //undefined
    var name1 = "Ramesh"; //function scope
    console.log(name1); //Ramesh
}
show();  //Narasimha Ramesh

//FunctionScope with let
let name2 = "Narasimha";
function show2() {
    console.log(name2); //ReferenceError
    let name2 = "Ramesh"; //block scope
    console.log(name2); //ReferenceError
}
show2();  //ReferenceError


//FunctionScope with const
const name3 = "Narasimha";
function show3() {
    console.log(name3); //ReferenceError
    const name3 = "Ramesh"; //block scope
    console.log(name3); //ReferenceError
}
show3();  //ReferenceError
