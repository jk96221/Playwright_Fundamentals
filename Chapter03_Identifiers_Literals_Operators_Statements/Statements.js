//What is Statement?
//Statement is a command that is executed by the JavaScript engine.
//Different Type of Statements
//1.Expression Statements
//2.Declaration Statements
//3.Control Flow Statements
//4.Function Statements
//5.Class Statements
//6.Module Statements
//7.Import Statements
//8.Export Statements
//9.Return Statements
//10.Yield Statements

//1.Expression Statements
let myExpression = 10 + 20;
//This is a valid expression statement
console.log(myExpression);

//2.Declaration Statements
let myDeclaration = 10;
//This is a valid declaration statement
console.log(myDeclaration);

//3.Control Flow Statements
let myControlFlow = 10 > 20 ? 30 : 40;
//This is a valid control flow statement
console.log(myControlFlow);

//4.Function Statements
function myFunction() {
    console.log("Hello World");
}
//This is a valid function statement
myFunction();

//5.Class Statements
class myClass {
    constructor() {
        console.log("Hello World");
    }
}
//This is a valid class statement
let myClassInstance = new myClass();

//6.Module Statements
import myModule from "./myModule.js";
//This is a valid module statement
console.log(myModule);

//7.Import Statements
import { myImport } from "./myImport.js";
//This is a valid import statement
console.log(myImport);

//8.Export Statements
export let myExport = 10;
//This is a valid export statement
console.log(myExport);

//9.Return Statements
function myReturn() {
    return 10;
}
//This is a valid return statement
console.log(myReturn());

//10.Yield Statements
function* myYield() {
    yield 10;
}
//This is a valid yield statement
let myYieldInstance = myYield();
console.log(myYieldInstance.next());