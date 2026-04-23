/* The Task: Create two variables, a and b, and give them values (e.g., a = 5, b = 10). Without simply reassigning them manually (like a = 10), find a way to swap their values so that a becomes 10 and b becomes 5.
Hint: You might need a third "temporary" variable to hold a value while you move the others around
 */

let a = 5
let b = 10

let swap;

swap = a;
a = b;
b = swap;

console.log(a, b)