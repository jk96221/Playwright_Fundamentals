//Scope in Functions

let ENV="Staging";  //Global Scope

function SetupConfig()
{
    let TimeOut=3000;    // Local Scope
    console.log(ENV);    //Can Access Global 
    console.log(TimeOut); //Can Access Local
}
//SetupConfig();

//console.log(ENV);            //Output: Staging
console.log(TimeOut);      // ReferenceError : TimeOut is not defined   -- Not Accessable Outside.


//Nested Scope || blocked Scope

function outer()
{
    let x=25;

    function inner()
    {
        let y=45;
        console.log(x);   //inner can access outer's variable.
        console.log(y);     
    }
    inner();
    //console.log(y);  //outer can't access inner's variable.
}

outer();

