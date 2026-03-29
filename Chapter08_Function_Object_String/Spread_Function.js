let nums=[1,2,3,4];
add (...nums);  //Same as add (1,2,3,4)

//Spread response codes into validators

function.hasError(...codes)
{
    return codes.some(c=>c>=400);
}