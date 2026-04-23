/*  Task 2: Write a script that prints numbers from 1 to 50.
For multiples of 3, print "Fizz" instead of the number.
For multiples of 5, print "Buzz".
For numbers that are multiples of both 3 and 5, print "FizzBuzz".
Hint: Use the remainder operator % to check for multiples.
 */

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}