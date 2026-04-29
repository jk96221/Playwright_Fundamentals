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

    const [result1, result2, result3] = await Promise.all([
        ApiTest("Login"),
        ApiTest("Dashboard"),
        ApiTest("Reports Generation")
    ]);

    console.log(result1);
    console.log(result2);
    console.log(result3);

    
    console.log("Sequential execution completed in " + (Date.now() - start) + " ms");
}   
SequentialExecution();
 