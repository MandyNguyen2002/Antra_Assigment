/*
Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/

function Longest_Country_Name(arr) {
  return arr.reduce((a, b) => (b.length > a.length ? b : a), "");
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
