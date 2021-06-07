function addItem() {
    let listField = document.querySelector('#items');
    let inputField = document.querySelector('#newItemText');

    let inputValue = inputField.value;

    let newLi = document.createElement('li');
    newLi.textContent = inputValue;
    listField.appendChild(newLi);

    inputField.value = '';
}