function runTest(testName, callback)
{
    let result="Pass";
    //100 Lines
    callback (testName,result);
}
function onComplete(name,result)
{
    console.log(`${name} finished with : ${result}`);
}
console.log(runTest("LoginTest",onComplete));
