import { html } from './../../node_modules/lit-html/lit-html.js';

export const optionTemplate = (data) => html`
<option value="${data._id}">${data.text}</option>`;

export const selectTemplate = (data) => html`${data.map(optionTemplate)}`;
