let a={status:"pass"};
let b=a;
b.status="fail";
console.log(a.status);
//output: fail

//2 Question
let str=" PASS ";
console.log(str.trim().toLowerCase());
//output :pass

//3.What does "pass,fail,skip.split(",").length return?

console.log("pass,fail,skip".split(",").length);  
//Output :3

//4.What is the Output?
let s1="hello";
str[0]="H";
console.log(s1);
//hello

//5.which correctly extracts "staging" from this URL?

let url='https://staging.example.com';
console.log(url.slice(8,15));
console.log(url.split("://")[1].split(".")[0]);

//what does this return?
console.log("ERROR:404 Not found".match(/\d+/g));

//[ '404' ]
