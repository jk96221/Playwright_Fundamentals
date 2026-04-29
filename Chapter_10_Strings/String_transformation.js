//Change Case
let str = "Hello World";

console.log(str.toLowerCase()); // "hello world"
console.log(str.toUpperCase()); // "HELLO WORLD"

//Trim Spaces
let str1 = "   Hello World   ";

console.log(str1.trim());      // "Hello World"
console.log(str1.trimStart()); // "Hello World   "
console.log(str1.trimEnd());   // "   Hello World"

//Replace Text Replace first match

let str2 = "Hello World";

console.log(str2.replace("World", "JS")); // "Hello JS"

//Replace all matches

let str3 = "foo foo foo";

console.log(str3.replaceAll("foo", "bar")); // "bar bar bar"
console.log(str3.replace(/foo/g, "car")); // "car car bar"

let url='https://fx1qa.idsnext.live/';
console.log(url.replace(/qa/g,"live"));
//concatenation String

let s1="Hello";
let s2=" Good Morning";
console.log(s1.concat(s2));

//spliting and joining
a='Hello';
console.log(a.split(""));
console.log("narasimha".split(""));

b="test_login_pass"
console.log(b.split("_").join(" "));

//Template literal (Joining with format)
let parts=["2026","03","20"];
let Date=parts.join("-");
console.log(Date);  //2026-03-20

