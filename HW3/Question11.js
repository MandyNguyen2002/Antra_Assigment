/*
Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 
*/

function secondLowestGreatest(arr) {
  arr.sort();
  console.log(arr[1], arr[arr.length - 2]);
}

secondLowestGreatest([1, 2, 3, 4, 5]);
