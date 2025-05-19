/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter
of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox 
*/

function upperFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let x = "the quick brown fox";
console.log(upperFirstLetter(x));
