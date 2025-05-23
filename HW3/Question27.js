function longestPalindrome(str) {
  let max = "";
  for (let i = 0; i < str.length; i++) {
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right < str.length && str[left] == str[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > max.length) {
      max = str.slice(left + 1, right);
    }
  }

  return max;
}

let x = "bananas";
console.log(longestPalindrome(x));
