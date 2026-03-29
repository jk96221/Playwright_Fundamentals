let testMatrix = [                
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for (let i = 0; i < testMatrix.length; i++) {

    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j] + " ")
    }
    console.log(" ");

}

console.log(" --------- ");

// Standard out - process.stdout.write() - does not add a new line


for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log();  // New line after each row
}
console.log(" --------- ");


// forEach
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});

console.log(" --------- ");