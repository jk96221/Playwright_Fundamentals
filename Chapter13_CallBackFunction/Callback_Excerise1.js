function greetTester(name, callback) {
    console.log("Hello " + name);
    callback();
}

greetTester("Narasimha", function() {
    console.log("Welcome to JavaScript Callbacks!");
});


// Callback with Parameters

function runTest(testName, callback) {
    let status = "Pass";
    callback(testName, status);
}

runTest("Login testName", function(name, result) {
    console.log(name + " -> "+ result); 
});

//Sync callback - forEach loop

let bugs = ["UI Glitch", "API Timeout", "Memory Leak"];
bugs.forEach(function(bug, i) {
    console.log(("BUG #" + (i + 1)) + ". " + bug);
});

console.log("Total Bugs: " + bugs.length);