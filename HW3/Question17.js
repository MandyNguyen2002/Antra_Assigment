/*
Write a JavaScript function to get the number of occurrences of each letter in specified
string
*/

function letterCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }

  return obj;
}

let x = "testing";
console.log(letterCount(x));
