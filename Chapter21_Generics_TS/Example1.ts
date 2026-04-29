function getString(name: string): string {
    return "Narasimha";
}
getString("IDSNEXT");
//getFirstResult(123);

function getFirstResults<T>(results: T[]): T {
    return results[0]!;
}
let firstCode = getFirstResults([200,404, 500]);
let firstTest = getFirstResults(["Playwright", "Puppeteer", "Cypress"]);

console.log("First code is " + firstCode);
console.log("First test is " + firstTest);  
