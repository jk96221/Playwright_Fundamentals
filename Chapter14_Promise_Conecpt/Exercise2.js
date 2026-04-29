let p = new Promise(function (resolve, reject) {
    reject("Something broke");
});

 p.catch(function (err) {
    console.log("Caught:", err);
});


