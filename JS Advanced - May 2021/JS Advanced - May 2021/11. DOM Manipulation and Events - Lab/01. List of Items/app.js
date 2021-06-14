function addItem() {
    let items = document.querySelector('#items');
    let addField = document.querySelector('#newItemText');
    let li = document.createElement('li');
    li.textContent = addField.value;
    items.appendChild(li);
}