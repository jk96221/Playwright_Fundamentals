 let t1 = Promise.resolve("Login: PASS");
 let t2 = Promise.resolve("Search: PASS");
 let t3 = Promise.resolve("Logout: PASS");

 Promise.all([t1, t2, t3]).then(function (results) {
     console.log(results);
 });
