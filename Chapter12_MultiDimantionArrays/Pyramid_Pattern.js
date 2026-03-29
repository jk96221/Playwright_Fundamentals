//Pyramid Pattern
//   *
//  ***
// *****
//********

let n = 4; // Number of rows

for (let i = 1; i <= n; i++) {
    let row = "";
    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
    // Move to the next line
    console.log();
}
  
