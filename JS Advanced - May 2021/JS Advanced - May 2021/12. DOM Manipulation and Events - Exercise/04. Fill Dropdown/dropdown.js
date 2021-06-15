function addItem() {
    const menu = document.querySelector('#menu');
    const inputText = document.querySelector('#newItemText');
    const inputValue = document.querySelector('#newItemValue');

    let option = document.createElement('option');
    option.textContent = `${inputText.value}`;
    option.setAttribute('value', `${inputValue.value}`);

    menu.appendChild(option);
    inputText.value = '';
    inputValue.value = '';
}