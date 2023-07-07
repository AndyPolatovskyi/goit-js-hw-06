const form = document.querySelector('.login-form');

form.addEventListener('submit', evt => {
    evt.preventDefault();
    console.dir(evt.currentTarget)
    const { elements: { email, password }} = evt.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return false;
      }
    
      console.log(`Login: ${email.value}, Password: ${password.value}`);
      evt.currentTarget.reset();
    
})
