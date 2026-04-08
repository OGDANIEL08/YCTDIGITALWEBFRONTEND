function isPalindrome(word) {
  let reverse = "";

  for (let i = word.length - 1; i>= 0; i--) {
    reverse += word[i];
  }

  if (word === reverse) {
    return "it's a palindrome"
  } else {
    return "its not a palindrome"
  }
}

console.log(isPalindrome("pap")) // it's a palindrome

