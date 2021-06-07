function deleteByEmail() {
    let emails = document.querySelectorAll('tbody tr td:nth-child(2)');
    let inputField = document.querySelector('input[type=text]');
    let inputValue = inputField.value;

    let result = document.querySelector('#result');
    for (let email of emails) {
        if (email.textContent === inputValue) {
            let tds = email.parentNode;
            tds.parentNode.removeChild(tds);

            result.textContent = 'Deleted.'
            return
        }
    }

    result.textContent = 'Not found.'
}