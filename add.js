function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("non number not supported");
  }
  return a + b;
}
let ans = sum(5, 6);
console.log(ans);
