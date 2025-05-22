/*
Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg
*/

function uniqueChars(str) {
  return Array.from(new Set(str)).join("");
}

let x = "thequickbrownfoxjumpsoverthelazydog";
console.log(uniqueChars(x));
