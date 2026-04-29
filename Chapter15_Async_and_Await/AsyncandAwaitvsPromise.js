
async function getTestResults() {
    return "PASS";
}
//Async function always returns a Promise.
getTestResults().then(function(result) {
    console.log(result);
});


//Async function with await

async function runRuslt() {
    let result= await Promise.resolve("Login Test Passed");
    console.log(result);

    let result2= await Promise.resolve("Payment Test Passed");
    console.log(result2);
}
runRuslt();