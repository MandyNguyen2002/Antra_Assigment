/*
 Write a JavaScript function that returns array elements larger than a number
*/

function greaterThan(arr, num) {
  return arr.filter((x) => x > num);
}

let x = [1, 2, 3, 4, 5, 6, 7];
console.log(greaterThan(x, 6));
