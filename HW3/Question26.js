/*
Write a JavaScript function to find longest substring in a given a string without repeating
characters
*/

function longestNonRepeatingSubstring(str) {
  let max = "";
  let temp = "";
  for (let c of str) {
    if (temp.indexOf(c) == -1) {
      temp += c;
    } else {
      max = temp.length > max.length ? temp : max;
      temp = temp.slice(temp.indexOf(c) + 1) + c;
    }
  }

  return temp.length > max.length ? temp : max;
}

let x = "abcbbvvmmmmdefg";
console.log(longestNonRepeatingSubstring(x));
