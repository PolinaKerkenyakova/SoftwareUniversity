import { render } from './../node_modules/lit-html/lit-html.js';
import { selectTemplate } from './templates/selectTemplating.js';

const selectMenu = document.querySelector('#menu');
document.querySelector('#submitBtn').addEventListener('click', addItem)
let data = [];
getOptionsFromServer();

async function getOptionsFromServer() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const dataObj = await response.json();
    data = Object.values(dataObj)
    render(selectTemplate(data), selectMenu)
}

async function addItem(e) {
    e.preventDefault();
    const inputValue = document.querySelector('#itemText');

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: { 'Content-Type': 'appliction/json' },
        body: JSON.stringify({ text: inputValue.value })
    });

    if (response.ok) {
        const option = await response.json();
        data.push(option);
        render(selectTemplate(data), selectMenu);
        inputValue.value = '';
    }
}