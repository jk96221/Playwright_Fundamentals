function getstatus(code)
{
    if(code>=200 && code<300) return "Success"
    if(code>=400 && code<500) return "Client Error"
    if(code>=500) return "Server Error"

}

console.log(getstatus(200));
console.log(getstatus(450));
console.log(getstatus(500));

