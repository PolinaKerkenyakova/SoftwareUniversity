import { html } from './../../node_modules/lit-html/lit-html.js';
import { ifDefined } from './../../node_modules/lit-html/directives/if-defined.js';

export const createTown = (town) => html`
<li class="${ifDefined(town.class)}">${town.name}</li>`;

export const createAllTowns = (towns) => html`
<ul>
    ${towns.map(createTown)} 
</ul>`;

export const matchesTemplate = (matches) => html`<div id="result">${matches} matches found</div>`;