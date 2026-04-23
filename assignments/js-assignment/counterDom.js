/* 5. Simple Counter (DOM Exercise)
Goal: Connect JavaScript to an actual webpage.
The Task: Create a simple HTML page with a 0 displayed in a <span>, and two buttons: "Increase" and "Decrease." Write the JavaScript to make the buttons update the number on the screen.
Key Methods: document.getElementById(), addEventListener(), and innerText
 */

const countElement = document.getElementById('count');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

let count = 0

increaseBtn.addEventListener('click', () => {
  count++
  countElement.textContent = count
});

decreaseBtn.addEventListener('click', () => {
  count--
  countElement.textContent = count
})