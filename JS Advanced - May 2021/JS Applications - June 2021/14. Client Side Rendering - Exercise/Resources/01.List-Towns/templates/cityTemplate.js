import { html } from './../../node_modules/lit-html/lit-html.js';

export const renderCity = (city) => html`
<li>${city}</li>`;

export const renderAllCities = (cities) => html`
<ul>
    ${cities.map(renderCity)}
</ul>`;
