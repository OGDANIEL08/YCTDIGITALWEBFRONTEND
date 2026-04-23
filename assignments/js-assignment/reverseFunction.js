function reverse(word) {
   let reverse = [''];

  for (let i = word.length - 1; i>= 0; i--) {
    reverse[reverse.length-1] += word[i]; //add all into one string at only index 0
  }

  return reverse
}

console.log(reverse('Daniel'))