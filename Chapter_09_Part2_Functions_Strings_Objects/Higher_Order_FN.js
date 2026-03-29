//Higher Order functions

// A function that takes a function a argument or returns a function.

function runWithLogging(testfn,testName)
{
    console.log(`Starting: ${testName}`);
    let result = testfn();
    console.log(`Finished: ${testName} -> ${result}`);
    return result;
}

function loginTest()
{
    return "Pass";
}
function logoutTest()
{
    return "Fail";
}

let Test_result=runWithLogging(loginTest,"Login Test");
console.log(Test_result);

let Test_result1=runWithLogging(logoutTest,"Logout Test");
console.log(Test_result1);