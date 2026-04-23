 function countWords(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }

  const words = sentence.trim().split(' ')
  let count = 0
  for (const word of words) {
    if (word !== '') {
      count++
    }
  }
  return count
}

console.log(countWords("Hello Daniel")) 


















































/* function wordCount(word) {
  const wordNum =  word.trim().split(/\s+/).length
  
  return wordNum
}x

console.log(wordCount("")) */

