function placeorder(order, callback)
{
    console.log("Order placed");
    callback();
}

//Defining the callback function
//Normal callback function
function print()
{
    console.log("Normal callback function");
}
placeorder("Pasta", print);

//Anonymous callback function

placeorder("Pizza", function()  {
    console.log("Anonymous callback function");
});

//Arrow function as callback
placeorder("Burger", () => {
    console.log("Arrow function as callback");
});

    

