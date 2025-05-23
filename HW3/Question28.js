/*
Write a JavaScript program to pass a 'JavaScript function' as parameter
*/

function executeCallbackFunction(callback) {
  console.log("Function passed as parameter: ", callback);
  return callback();
}

function JavaScriptFunction() {
  return "Hi JavaScript function!";
}

console.log(executeCallbackFunction(JavaScriptFunction));
