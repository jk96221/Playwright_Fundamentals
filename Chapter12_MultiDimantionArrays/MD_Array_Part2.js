let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// 3x3

// Access — [row][col]
console.log(grid[0][0])
// grid[2][1]; -> 80
// grid[1][2]; -> 60


grid[0][0] = 99;
console.log(grid[0][0]);
console.log(grid);

console.log(grid.length);   // 3 — number of rows
console.log(grid[0].length);  // 3 — number of cols in row 0

console.log(grid[grid.length - 1][grid[0].length - 1]); // Last element 
// grid[2][2];

