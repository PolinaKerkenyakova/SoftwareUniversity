import { html } from './../../node_modules/lit-html/lit-html.js';
import { ifDefined } from './../../node_modules/lit-html/directives/if-defined.js';

export const rowTemplate = (row) => html`
<tr class=${ifDefined(row.class)}>
    <td>${row.name}</td>
    <td>${row.email}</td>
    <td>${row.course}</td>
</tr>`;

export const tableBodyTemplate = (data) => html`${data.map(rowTemplate)}`;
