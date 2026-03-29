// API Testing

function hasError (...codes)
{
    return codes.some(c=> c>=400);
}
let responseCodes = [200,201,301,500];

console.log(hasError(...responseCodes))  //true


