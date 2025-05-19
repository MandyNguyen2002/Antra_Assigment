/*
Write a JavaScript function which returns the n rows by n columns identity matrix
*/

function identityMatrix(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row += "1 ";
      } else {
        row += "0 ";
      }
    }
    console.log(row);
  }
}

identityMatrix(5);
