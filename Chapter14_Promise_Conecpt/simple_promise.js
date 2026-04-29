const myPromise = new Promise((resolve, reject) => {
  let success = false; // Change this to true to see the resolution case

  if (success) {
    resolve("Task completed!");
  } else {
    reject("Something went wrong!");
  }
});

console.log(myPromise);
