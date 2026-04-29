let env = "staging"; 
let moduleName = "auth"; 
let count = 7; 

let testId = `${env}_${moduleName}_${String(count).padStart(3, "0")}`;
console.log(testId);