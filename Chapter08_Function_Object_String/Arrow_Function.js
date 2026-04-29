const greet =function (name)
{
    return `HelloAll, ${name}!`;
}
const greet1=(name2)=> `HeyAll,${name2}!`;

console.log(greet("Narasimha"));
console.log(greet1("testids"));

//Zero functions only generally works whenever you have a single line

const doubleIt=n => n*2;
console.log(doubleIt(10));

//No parameters required

const getENV= () => "Testing";
console.log(getENV());

//Suppose we have a Multiline, Can we Use Arrow Function? Yes

const getResult= (score) =>
    
    {
if (score>=45) return "Pass";
return "Fail";
}
console.log(getResult(65));
