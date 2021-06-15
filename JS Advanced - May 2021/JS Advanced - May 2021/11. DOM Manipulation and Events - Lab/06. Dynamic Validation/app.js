function validate() {
    let emailField = document.querySelector('#email');

    emailField.addEventListener('change', onChange);

    let regex = /[a-z]+[@][a-z]+\.[a-z]+/g;
    
    function onChange(e) {
        let email = e.target.value
        if (regex.test(email)) {
            emailField.classList.remove('error');
        } else {
            emailField.classList.add('error');
        }
    }
}