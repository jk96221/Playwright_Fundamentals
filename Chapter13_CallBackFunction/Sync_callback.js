function doSomething(callback) {
  console.log("Step 1");    // runs first
  callback(); // runs right away
  console.log("Step 3");  // runs right after callback() is called, not waiting for it to finish
}

doSomething(function() {
  console.log("Step 2");  // runs right after "Step 1", before "Step 3"
});

//another example

function greet(name) {
    console.log("Hello, " + name);
}
function processUserInput(callback) {
    const name = "Alice";
    callback(name); // executed immediately (synchronous)
}

processUserInput(greet);