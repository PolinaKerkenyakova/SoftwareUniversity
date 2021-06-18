function validate() {
    let input = document.querySelector('input[type="text"]');

    input.addEventListener('change', onChange);

    function onChange() {
        if (/[a-z]+[@][a-z]+[.][a-z]+/.test(input.value)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }
}