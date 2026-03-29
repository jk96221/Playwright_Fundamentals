//Multiple Return values

function getStatus(code)
{
    if(code>=200 &&  code<300) return "Success";
    if(code>=300 && code<500) return "Client Error";
    if(code>=500) return "Server Error"
}
console.log(getStatus(404));

//Return Multiple values via array or object.

function aaaa()
{
    return [2,2,5,3,6];
}
console.log(aaaa());

