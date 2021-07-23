import { html } from './../../node_modules/lit-html/lit-html.js';

export const createCat = (cat, showStatusCode) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${showStatusCode}>Show status code</button>
        <div class="status hidden" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`;

export const createAllCats = (cats, showStatusCode) => html`
<ul>
    ${cats.map(c => createCat(c, showStatusCode))}
</ul>`;