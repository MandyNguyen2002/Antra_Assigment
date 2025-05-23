/*
Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/

function getSubset(arr, index) {
  const result = [];
  function combine(start, combo) {
    if (combo.length === index) {
      result.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      combine(i + 1, combo);
      combo.pop();
    }
  }
  combine(0, []);
  return result;
}

console.log(getSubset([1, 2, 3], 2));
