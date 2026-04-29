function logResults(SuiteName,....results)
{
    console.log(`Suite: ${SuiteName}`);
    console.log(`Results: ${results.join(" , ")}`);
}

logResults ("Auth Suite", "Pass","Fail", "Pass", "Skip");
