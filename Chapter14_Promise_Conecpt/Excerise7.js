 Promise.resolve("Quick win").then(function (msg) {
     console.log(msg);
 });

 Promise.reject("Quick loss").catch(function (msg) {
     console.log(msg);
 });

