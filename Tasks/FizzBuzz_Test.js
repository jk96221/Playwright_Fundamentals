// 1. The loop tells the program to repeat the logic 100 times
for (let i = 1; i <= 100; i++) {

    // 2. The if-else if chain handles the "FizzBuzz" logic
    if (i % 3 === 0 && i % 5 === 0) {
        // Checks if 'i' is divisible by both 3 and 5 (like 15, 30, 45)
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        // If not both, is it just a multiple of 3?
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        // If not 3, is it just a multiple of 5?
        console.log("Buzz");
    }
    else {
        // If it doesn't fit any of the above, just print the number
        console.log(i);
    }
}