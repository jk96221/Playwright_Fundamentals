/*
Build Test Users from Arrays
Write a JavaScript function that receives two arrays: one with names and one with roles. 
Return a new array of user objects in the format `{ username, email, role }`. 
The username should be lowercase with spaces replaced by underscores, 
and the email should use the domain `@playwrightbatch.com`.

Examples:
Input:
names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]
*/
function buildTestUsers(names, roles) {
  return names.map((name, index) => {
    // Transform name to username: lowercase and spaces to underscores
    const username = name.toLowerCase().replace(/\s+/g, '_');
    
    // Create email: take the first part of name (split by space)
    const emailPrefix = name.split(' ')[0].toLowerCase();
    const email = `${emailPrefix}@playwrightbatch.com`;
    
    // Return the new object
    return {
      username: username,
      email: email,
      role: roles[index] // Match role by the same index
    };
  });
}

// Example Usage:
const names = ["Narasimharao", "Anusha"];
const roles = ["admin", "viewer"];

const users = buildTestUsers(names, roles);
console.log(users);