/*
 Write a JavaScript function that returns array elements larger than a number
*/

function generateID(n) {
  let character_list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < n; i++) {
    random_index = Math.floor(Math.random() * character_list.length);
    id += character_list[random_index];
  }

  return id;
}

console.log(generateID(10));
