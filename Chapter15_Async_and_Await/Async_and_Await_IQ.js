// async function sayHello() {
//     return "Hello, QA!";
// }

// sayHello().then(function (msg) {
//     console.log(msg);
// });
console.log("================================================================");
// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("Status code:", status);
// }

// getStatus();

console.log("================================================================");

// async function testFlow() {
//     let step1 = await Promise.resolve("Opened browser");
//     console.log(step1);

//     let step2 = await Promise.resolve("Clicked login");
//     console.log(step2);

//     let step3 = await Promise.resolve("Verified dashboard");
//     console.log(step3);
// }

// testFlow();

console.log("================================================================");


// async function riskyTest() {
//     try {
//         let data = await Promise.reject("Element not found");
//         console.log(data);
//     } catch (err) {
//         console.log("Test failed:", err);
//     }
// }

// riskyTest();

console.log("================================================================");

// async function apiTest() {
//     try {
//         let response = await Promise.resolve({ status: 201, body: "Created" });
//         console.log("Status:", response.status);
//         console.log("Body:", response.body);
//     } catch (err) {
//         console.log("Error:", err);
//     } finally {
//         console.log("Test complete");
//     }
// }

// apiTest();

console.log("================================================================");

// console.log("A");

// async function test() {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
// }

// test();
// console.log("D");

console.log("================================================================");


// async function runAll() {
//     let [a, b, c] = await Promise.all([
//         Promise.resolve("Login: OK"),
//         Promise.resolve("Cart: OK"),
//         Promise.resolve("Checkout: OK")
//     ]);

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// runAll();

console.log("================================================================");

// async function healthCheck() {
//     let results = await Promise.allSettled([
//         Promise.resolve("Auth: UP"),
//         Promise.reject("DB: DOWN"),
//         Promise.resolve("Cache: UP")
//     ]);

//     results.forEach(function (r) {
//         let status = r.status === "fulfilled" ? "✅" : "❌";
//         let msg = r.value || r.reason;
//         console.log(status + " " + msg);
//     });
// }

// healthCheck();

console.log("================================================================");

// async function checkEndpoints() {
//     let endpoints = ["/login", "/users", "/orders"];

//     for (let i = 0; i < endpoints.length; i++) {
//         let result = await Promise.resolve(endpoints[i] + " → 200");
//         console.log(result);
//     }

//     console.log("All checks done");
// }

// checkEndpoints();

console.log("================================================================");

// Async IIFE(Immediately Invoked)


// (async function () {
//     let msg = await Promise.resolve("Quick async test");
//     console.log(msg);
// })();

// console.log("Outside");

console.log("================================================================");

async function add(a, b) {
    return a + b;
}

async function main() {
    let result = await add(10, 20);
    console.log("Sum:", result);

    let result2 = await add(result, 30);
    console.log("Total:", result2);
}

main();