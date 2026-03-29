//Hosting
//Function declarations are hoisted.
//you can call them before they're defined.
//function expressions and arrow functions are NOT.

greet("Narasimha");  //Declaration Hoisted,works before definition
//console.log(greet("Narasimha"));

function greet(name)
{
  return `Hello,${name}!`;    
}
console.log(greet("Narasimha"));


sayHi("Raj");                    // Type Error - SayHi is not a function

const sayHi=function (name1)
{
    return `Hello,${name1}!`;
}
console.log(sayHi("Raj"));
