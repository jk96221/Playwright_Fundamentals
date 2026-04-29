let n = 4;

for (let i = 1; i <= n; i++) {
        let row = "";

    // add spaces for right alignment
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
}
