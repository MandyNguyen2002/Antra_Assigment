/*
Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not
*/

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let x = 13;
console.log(isPrime(x));
