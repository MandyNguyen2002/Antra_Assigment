/*
Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run.
*/

function isPalindrome(str) {
  let x = str.replaceAll(" ", "");
  return x === x.split("").reverse().join("");
}

let a = "nurses run";
console.log(isPalindrome(a));
