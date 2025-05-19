/*
Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/

function longestWord(str) {
  return str.split(" ").reduce((a, b) => (b.length > a.length ? b : a));
}

let x = "Web Development Tutorial";
console.log(longestWord(x));
