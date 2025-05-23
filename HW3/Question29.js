/*
Write a JavaScript function to get the function name
*/

function functionName(func) {
  return func.name;
}

function testFunction() {}

console.log(functionName(testFunction));
