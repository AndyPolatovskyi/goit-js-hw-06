const inputName = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

inputName.addEventListener('input', evt => {
    
    outputSpan.textContent = inputName.value === "" ? "Anonymous": inputName.value;

})