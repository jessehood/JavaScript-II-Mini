// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

// code here
let countToTen = (n = 0) => {
  console.log(`While Loop ${n}`);
  if (n < 10) return countToTen(n+1);
}
// when you code is ready, un-comment the next line and run the file
console.log(countToTen());
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5));

// write the above functionin a recursive way.

// when you code is ready, un-comment the next line and run the file
// console.log(recursiveFactorial());
