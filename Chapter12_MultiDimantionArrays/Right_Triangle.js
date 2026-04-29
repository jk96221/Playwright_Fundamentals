//   1
//  01
// 101
//0101

//left triangle
let n = 4;

for (let i = 1; i <= n; i++) {
    let row = "";

    // add spaces
    for (let s = 0; s < n - i; s++) {
        row += " ";
    }

    // starting number (1 for odd rows, 0 for even rows)
    let num = i % 2;

    // build binary pattern
    for (let j = 0; j < i; j++) {
        row += num;
        num = 1 - num; // toggle
    }

    console.log(row);
}