/* 
Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g
*/

function combinationString(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.substring(i, j));
    }
  }
  return result;
}

let x = "dog";
console.log(combinationString(x));
