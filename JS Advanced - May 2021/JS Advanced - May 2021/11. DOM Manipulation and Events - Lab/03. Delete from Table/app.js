function deleteByEmail() {
    let inputField = document.querySelector('input[type=text]');
    let input = inputField.value;
    let tr = Array.from(document.querySelectorAll('tbody tr'));
    let resultField = document.querySelector('#result');
    
    tr.forEach(tr => {
        if (tr.children[1].textContent === input) {
            tr.remove();
            resultField.textContent = 'Deleted.'
        } else {
            resultField.textContent = 'Not found.'
        }
    });

    inputField.value = '';
}