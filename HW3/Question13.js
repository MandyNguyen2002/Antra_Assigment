/*
Write a JavaScript function to compute the factors of a positive integer.
*/

function factors(num) {
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
}

let x = 30;
console.log(factors(x));
