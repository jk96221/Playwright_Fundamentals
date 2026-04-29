 let t1 = Promise.resolve("PASS");
 let t2 = Promise.reject("FAIL");
 let t3 = Promise.resolve("PASS");

 Promise.all([t1, t2, t3])
     .then(function (r) { console.log("All:", r); })
     .catch(function (err) { console.log("Stopped:", err); });
