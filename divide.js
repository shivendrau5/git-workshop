function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid Input");
  }
  return a / b;
}
let ans = divide(6, 2);
console.log(ans);
