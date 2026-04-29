let APICall = new Promise(function(resolve, reject) 
{
reject("500 Error");
});

APICall.then(function(data) 
{
     console.log("Data is Successful")
}).catch(function(error){
        console.log(error);
     });


