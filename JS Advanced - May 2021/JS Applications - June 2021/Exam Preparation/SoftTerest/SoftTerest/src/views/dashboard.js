import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCards } from '../api/data.js';

const cardTemplate = (card) => html`
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">${card.title}</p>
    </div>
    <img class="card-image" src="${card.img}" alt="Card image cap">
    <a class="btn" href="/details/${card._id}">Details</a>
</div>`;

const dashboardTemplate = (cards) => html`
<div id="dashboard-holder">
    ${cards.length > 0 ? html`${cards.map(cardTemplate)}` : html` <h1>No ideas yet! Be the first one :)</h1>`}
</div>`;

export async function dashboardPage(ctx) {

    const cards = await getAllCards();
    ctx.render(dashboardTemplate(cards))
}