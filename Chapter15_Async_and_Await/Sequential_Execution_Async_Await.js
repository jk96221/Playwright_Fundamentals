function ApiTest(name) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(name,"2 seconds have passed");
        }, 1000);
    }
    );

}

async function SequentialExecution() {
    
    console.log("Starting sequential execution...");
    let start= Date.now();

    const result1 = await ApiTest("Login");
    console.log(result1);
    const result2 = await ApiTest("Dashboard");
    console.log(result2);
    const result3 = await ApiTest("Reports Generation");
    console.log(result3);

    console.log("Sequential execution completed in " + (Date.now() - start) + " ms");
}   
SequentialExecution();
 