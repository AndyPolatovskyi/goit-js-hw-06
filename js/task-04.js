const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const outputSpan = document.querySelector('#value');

let number = 0;
decrementButton.addEventListener('click', decrementClick);
incrementButton.addEventListener('click', incrementClick);
function decrementClick(evt) {
    number -= 1;
    outputSpan.textContent = number;
}
function incrementClick(evt) {
    number += 1;
    outputSpan.textContent = number;
}
