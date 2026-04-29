function placeOrder(order, callback) {
  console.log("Order placed for: " + order);

  // Simulating cooking time
  setTimeout(function () {
    console.log(order + " is ready!");
    
    // Calling the callback (like calling your phone)
    callback();
  }, 2000);
}
function notifyCustomer() {
  console.log("📞 Calling customer: Your food is ready!");
}

// Placing the order
placeOrder("Burger", notifyCustomer);