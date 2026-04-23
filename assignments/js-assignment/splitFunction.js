/* :

Algorithm for simpleSplit
Start
Create a list (array) with one empty string inside it
→ this will hold your first word
Go through each character in the string
Look at the string one character at a time from left to right
Check if the character is the separator
If it is the separator:
Add a new empty string to the list
→ this starts a new word
If it is NOT the separator
Take the character and add it to the last word in the list
Repeat
Continue steps 2–4 until you reach the end of the string
Finish
Return the list of words */


function splitWords(word, char) {
  let result = ['']

  for (let i = 0; i < word.length ; i++) {
    if (word[i] === char) {
      result.push('');
    } else {
      console.log(result[result.length - 1] += word[i])
      
    }
  }

  return result
}
console.log(splitWords('Daniel is a boy', ' '))



