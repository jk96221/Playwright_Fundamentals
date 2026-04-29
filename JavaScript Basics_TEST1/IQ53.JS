//How many times will this loop run: 
 
for (let i = 0; i < 3; i++) 
    { 
    console.log(i);
    }


    for (let i = 0; i < 5; i++) { if (i === 3) break; } console.log(i);
    //The first loop will run 3 times, and the second loop will run 3 times before breaking out of the loop when i equals 3.
    //OUTPUT:
//0
//1
//2
//3