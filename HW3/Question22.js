/*
Write a JavaScript function that accepts two arguments, a string and a letter and the
function will count the number of occurrences of the specified letter within the string.
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 
*/

function letterCount(str, char) {
  return str.split("").filter((c) => c === char).length;
}

console.log(letterCount("microsoft.com", "o"));
