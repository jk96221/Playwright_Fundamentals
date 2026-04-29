//if (ourstatuscode>=200 && ourstatuscode<300)

function VALSTACODE(status)
{
   if(status>=200 && status<=300)
   {
    console.log("Request is working fine");
   }else{
      console.log("Invalid Status Code");
   }   
}

VALSTACODE(200);

//Using Expression Functon
const VALSTACODE_EXP= function(status)
{
   if(status>=200 && status<=300)
   {
    console.log("Request is working fine");
   }else{
      console.log("Invalid Status Code");
   }   
}

VALSTACODE_EXP(400); 


//Using Arrow function

const VALSTACODE_Arrow=(status)=>
{
   if(status>=200 && status<=300)
   {
    console.log("Request is working fine");
   }else{
      console.log("Invalid Status Code");
   }   
}

VALSTACODE_Arrow(320);
