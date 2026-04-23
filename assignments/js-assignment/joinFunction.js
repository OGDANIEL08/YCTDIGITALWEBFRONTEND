// join function must return a string. 
// duplicate join characters
// 

/* 
const word = "Hello World"
console.log(word.join('')) */



function joinWords(words, char) {
  let result = '';

  for (let i = 0; i < words.length; i++) {
      if (result !== '') { // to avoid the char coming first ; -Hello-world
        result += char;
      }
      result += words[i];
  }

  return result;
}

console.log(joinWords(["Hello", "World"], '-'))
