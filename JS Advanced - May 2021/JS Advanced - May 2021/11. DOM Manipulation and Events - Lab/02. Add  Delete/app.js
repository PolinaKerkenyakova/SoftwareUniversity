function addItem() {
    let itemsList = document.querySelector('#items');
    let inputField = document.querySelector('#newItemText');
    let inputValue = inputField.value;

    if (inputValue.length === 0) { return };

    let newLiItem = document.createElement('li');
    newLiItem.textContent = inputValue;

    let remove = document.createElement('a');
    let textDelete = document.createTextNode('[Delete]');
    remove.appendChild(textDelete);
    remove.setAttribute('href', '#');
    newLiItem.appendChild(remove);

    remove.addEventListener('click', deleteElement);

    itemsList.appendChild(newLiItem);

    inputField.value = '';

    function deleteElement() {
        newLiItem.remove();
    }
}