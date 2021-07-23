import { render } from './../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
import { createAllCats } from './templates/catTemplate.js';

const allCatsContainer = document.querySelector('#allCats');

function showStatusCode(e) {
    const button = e.target
    const infoDiv = e.target.closest('.info');
    const showHideInfo = infoDiv.querySelector('.status');

    button.textContent === 'Show status code' ? 'Hide status code' : 'Show status code';
    if (showHideInfo.classList.contains('hidden')) {
        showHideInfo.classList.remove('hidden');
    } else {
        showHideInfo.classList.remove('hidden');
    }
}

render(createAllCats(cats, showStatusCode), allCatsContainer);

