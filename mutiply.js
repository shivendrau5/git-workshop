function multiply(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    throw new Error("Non numbers not supported");
  }
  let num1 = a;
  let num2 = b; // this is a test comment for dev branch
  return num1 * num2;
}
let ans = multiply(10, 20);
console.log(ans);
