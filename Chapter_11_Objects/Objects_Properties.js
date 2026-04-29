const user={
    name:"Jhony",
    age:34,
    email:"jhony@gmail.com"
};
console.log(user);

//Accessing Properties

console.log(user.name);
console.log(user["age"]);

//Dynamic Property Accessing

const key ="email";
console.log(user[key]);

//adding or modifying Properties

user.city="guntur";
user.age=45;

console.log(user);

