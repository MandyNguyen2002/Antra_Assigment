/* 
Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 
*/

function reverseNumber(x) {
  return Number(x.toString().split("").reverse().join(""));
}

let a = 12345;
console.log(reverseNumber(a));
