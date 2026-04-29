function retry(testName, maxRetries = 3, delay = 1000) 
{
  console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("Login");
retry("Checkout",100);
retry("API Test", 20, 600);
