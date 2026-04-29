//Callback
function placeorder(order, callback)
{
    console.log("Order placed");
    callback();
}

//Defining the callback function

function processorder()
{
    console.log("Order being processed");
}

placeorder("Pizza", processorder);


//Smallest possible JS example
function doSomething(callback) {
  console.log("Doing work...");
  callback(); // calling the callback
}

function sayDone() {
  console.log("Work finished!");
}

doSomething(sayDone);