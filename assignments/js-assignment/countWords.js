function wordCount(word) {
  const wordNum =  word.trim().split(/\s+/).length
  return wordNum
}

console.log(wordCount("Daniel is a boy"))
