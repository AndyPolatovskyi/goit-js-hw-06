const input = document.querySelector('#validation-input');
input.addEventListener('blur', evt => {
    if(input.value.length != input.dataset.length) {
        // input.classList.toggle("invalid");
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    else {
        // input.classList.toggle("valid");
        input.classList.add('valid');
        input.classList.remove('invalid');
}
}) 