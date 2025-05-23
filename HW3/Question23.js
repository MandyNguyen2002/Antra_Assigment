/*
Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e'
*/

function firstNonRepeatedChar(str) {
  const count = {};
  for (const c of str) {
    count[c] = (count[c] || 0) + 1;
  }
  for (const c of str) {
    if (count[c] === 1) return c;
  }
  return null;
}

console.log(firstNonRepeatedChar("abacddbec"));
