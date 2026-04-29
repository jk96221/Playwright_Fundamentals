//As an SDET, you frequently need to generate test data for 
// form testing. Write a JavaScript program that generates 
// test user data using a for loop. Each user should have 
// a unique ID (USR-0001 format), name, email, and 
// role (cycling through: admin, editor, viewer, tester, manager). 
// Every 3rd user should be inactive (edge case testing). 
// Demonstrate proper use of var (global counter), 
// let (loop variables), and const (fixed values).

// Fixed roles as constants
const role1 = "admin";
const role2 = "editor";
const role3 = "viewer";
const role4 = "tester";
const role5 = "manager";

// Global counter for unique IDs
var userCounter = 1;

// Total users to generate
const totalUsers = 10;

// Generate users using only for loop and simple variables
for (let i = 1; i <= totalUsers; i++) {
  // Generate user ID
  let userId = "USR-" + String(userCounter).padStart(4, "0");
  
  // Generate name and email
  let name = "TestUser" + userCounter;
  let email = "testuser" + userCounter + "@hotmail.com";
  
  // Assign role based on cycling using modulo
  let role;
  if (i % 5 === 1) role = role1;
  else if (i % 5 === 2) role = role2;
  else if (i % 5 === 3) role = role3;
  else if (i % 5 === 4) role = role4;
  else role = role5;
  
  // Every 3rd user is inactive
  let status = (i % 3 === 0) ? "inactive" : "active";
  
  // Print the user details
  console.log(userId, name, email, role, status);
  
  // Increment global counter
  userCounter++;
}