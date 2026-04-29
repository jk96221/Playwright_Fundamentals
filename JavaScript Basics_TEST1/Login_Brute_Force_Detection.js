//Write a JavaScript program that simulates a login system 
// with brute-force detection. The system should lock 
// the account after 3 consecutive failed attempts. 
// Use a do...while loop to process login attempts from an array.
//  Demonstrate var (global counter), let (loop variables), 
// and const (credentials and threshold). Validate using 
// strict equality (===) and logical operators (&&).

const correctUsername = "admin";
const correctPassword = "password123";
const maxAttempts = 3;
let failedAttempts = 0;
const loginAttempts = [
    { username: "admin", password: "wrongpass" },
    { username: "admin", password: "password123" },
    { username: "admin", password: "wrongpass" },
    { username: "admin", password: "wrongpass" },
    { username: "admin", password: "password123" }
];  
let attemptIndex = 0;
do {
    let attempt = loginAttempts[attemptIndex];
    if (attempt.username === correctUsername && attempt.password === correctPassword) {
        console.log("Login successful!");
        failedAttempts = 0; // Reset counter on successful login
    } 
    else 
        {
        failedAttempts++;
        console.log(`Failed login attempt ${failedAttempts}.`);
        if (failedAttempts >= maxAttempts) {
            console.log("Account locked due to too many failed attempts.");
            break;
        }
    }
    attemptIndex++;
} 
while (attemptIndex < loginAttempts.length);
