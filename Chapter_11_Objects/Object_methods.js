const obj={a:10,b:5,c:25,d:15};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//for loop
const user={name:"Narasimha",age:34,Job:"Engineer"};

for(const key in user){
    console.log(`${key}:${user[key]}`);
}

//for each loop
//Object.keys/values/entries

Object.keys(user).forEach(key=>{
    console.log(key);
});

Object.entries(user).forEach(([key,value])=>{
    console.log(`${key}:${value}`);
})
