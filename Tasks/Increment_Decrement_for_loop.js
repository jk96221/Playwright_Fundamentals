// Increment & Decremenet with For Loop
let a=5;
let b=a++ + ++a;
// a++ : 5 (a becomes 6 after this operation)
// ++a : 7 (a becomes 7 before this operation)
// So, b = 5 + 7 = 12
// After these operations, a is 7 and b is 12

console.log(a);
console.log(b);

let c=a++ + ++a + ++a + ++a + a++;
// a++ : 7 (a becomes 8 after this operation)
// ++a : 9 (a becomes 9 before this operation)
// ++a : 10 (a becomes 10 before this operation) 
// ++a : 11 (a becomes 11 before this operation)
// a++ : 11 (a becomes 12 after this operation)
// So, c = 7 + 9 + 10 + 11 + 11 = 48
      
console.log(c);

