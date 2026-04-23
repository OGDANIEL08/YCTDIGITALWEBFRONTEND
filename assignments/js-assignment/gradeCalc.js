/* 
3. Grade Calculator
Goal: Work with functions and multiple conditions.
The Task: Create a function called getGrade(score) that takes a number (0-100) and returns a letter grade (A, B, C, D, or F) based on standard percentage ranges.
Bonus: Add a check to see if the input is actually a number and within the 0-100 range.
 */

function getGrade(score) {
  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  } else if (score >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}