// Q1: Why does `if([])` evaluate to true even though the array is empty?
// In JavaScript, an empty array `[]` is considered a truthy value. 
// This means that when you use it in a conditional statement like `if([])`, 
// it evaluates to true. The same applies to an empty object `{}`; it is also considered truthy. 
// Therefore, both `if([])` and `if({})` will execute their respective blocks of code, resulting in the output:

if([])
    console.log("This is true!");
if({})
    console.log("This is also true!");
// Output:This is true!
//This is also true!

//Q2: Should I use `if(response)` or `if(response !== null)` in test assertions? 
// In test assertions, it is generally better to use `if(response !== null)` rather than `if(response)`. response;
//Case 1:
if(response)
{ 

}

//Case 2:
if(response!==null)
{

}

//Q3:Can I have an else if without a final else? 
// Yes, you can have an `else if` without a final `else`. 
// The `else if` statement is used to specify a new condition to test if the previous condition(s) were false. 
// It is not mandatory to have a final `else` block. You can simply end your conditional statements after 
// the last `else if` if you do not need to handle any additional cases.
if(condition1) {
    // code to execute if condition1 is true
}   else if(condition2) {
    // code to execute if condition2 is true
}   // No final else block is needed here


