 Promise.reject("Test failed")
     .then(function (data) {
         console.log("Data:", data);
     })
     .catch(function (err) {
         console.log("Error:", err);
     })
     .finally(function () {
         console.log("Cleanup done");
     });

