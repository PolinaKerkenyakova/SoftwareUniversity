import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteIdea, getCardById } from '../api/data.js';

const detailsTemplate = (card, isOwner, deleteCurrIdea) => html`
<div class="container home some">
    <img class="det-img" src="${card.img}" />
    <div class="desc">
        <h2 class="display-5">${card.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${card.description}</p>
    </div>
    ${isOwner ? html`
    <div class="text-center">
        <a class="btn detb" @click=${deleteCurrIdea} href="javascript:void(0)">Delete</a>
    </div>` : ''}
</div>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const card = await getCardById(id);

    const userId = sessionStorage.getItem('userId');

    ctx.render(detailsTemplate(card, userId === card._ownerId, deleteCurrIdea));

    async function deleteCurrIdea() {
        await deleteIdea(card._id);
        ctx.page.redirect('/dashboard');
    }
}