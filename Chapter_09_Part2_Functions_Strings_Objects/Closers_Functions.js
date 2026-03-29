function outer(x) {
  let y = 5;
   function inner(z) {
    return x + y + z;   // x = 10, y = 5
  }
  return inner;
}

const closure = outer(10);
console.log(closure(3)); // Output: 18