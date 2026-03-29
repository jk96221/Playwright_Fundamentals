//Expression - NOT hoisted
//Hoisting is not posible with Constant

sayHi("BOB");

const sayHi=function (name)
{
    return `Hi, ${name}`;
}
