//BlockScope with var
name1 = "Narasimha";
{
    console.log(name1);
    var name1 = "Ramesh";
    console.log(name1);
}
console.log(name1);

//BlockScope with let
let student1 = "rajesh";
{
    console.log(student1); //ReferenceError
    let student1 = "suresh";
    console.log(student1);
}
console.log(student1);

//BlockScope with const
const teacher1 = "Narasimha";
{
    console.log(teacher1);  //ReferenceError
    const teacher1 = "Ramesh";
    console.log(teacher1);
}
console.log(teacher1);