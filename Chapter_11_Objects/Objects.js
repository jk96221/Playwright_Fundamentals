//objects
//key and values

let student1={name: "Narsimha",age:33};
let student2={name:"Pavan",age:28,desg:"Engineer"};
let student3={name:"Anil",age:42,Degree:"MBA"};

console.log(student1);
console.log(student2);
console.log(student3);

//key will not be in double quotes
//Json will be in double quotes.

console.log("===========================")

let a={status:"pass"};
console.log(a.status);

console.log(a["status"]);

let a1={status:'fail'};
console.log(a1.status);

//b copies the Reference, Not the object.

let b=a;
b.status="Grade A";
console.log(a.status);

//keys are Casesensitive 
// Key value should not have a space.

let l={my id:101}; //invlaid key value

//Two Separate objects = different memory

let c={rollno=1001};
let d={rollno=1001};
console.log(c==d);

//Json

const t_JSON={
    "name":"Ganesh", "age":100
}
console.log(t_JSON);

//Java Script

const t_JS={
    name:"rama", age:150
}
console.log(t_JS);

