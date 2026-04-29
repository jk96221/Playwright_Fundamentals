function outer()
{
let Message="Hello";
console.log("outer called");
function inner()
{
console.log(Message);
}
return inner;
}

let fn_inner = outer();
fn_inner();