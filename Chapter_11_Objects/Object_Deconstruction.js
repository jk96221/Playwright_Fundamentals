const user={name1:'Joe',age:32,city:"ENG"};

//Basic Destructiong
const {name1, age}=user;
console.log(name1);
console.log(age);

//Rename Variable or Alias name

const {name1:UserName,age:userAge}=user;
console.log(UserName);
console.log(userAge);

//Default Values

const {country="USA"}=user;
console.log(country);
