let testRun = new Promise(function(resolve, reject)
{
    reject("Assertion Failed");
})

testRun.then(function(data)
{
    console.log("Test Case Passed");
})
.catch(function(error)
{
    console.log(error);
})
.finally(function()
{
    console.log("Test Case Execution Completed");
})
