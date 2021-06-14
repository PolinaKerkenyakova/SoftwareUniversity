function validate() {
    let emailField = document.querySelector('#email');

    emailField.addEventListener('change', validateE);

    let regex = /[a-z]+[@][a-z]+\.[a-z]+/g;
    
    function validateE(e) {
        let el = e.target.value
        if (regex.test(el)) {
            emailField.classList.remove('error');
        } else {
            emailField.classList.add('error');
        }
    }
}