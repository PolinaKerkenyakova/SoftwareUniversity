import { html } from '../../node_modules/lit-html/lit-html.js';
import { delListing, getListingById } from '../api/data.js';

const detailsTemplate = (car, deleteListing, isOwner) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${car.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand: ${car.brand}</span>Audi</li>
            <li><span>Model: ${car.model}</span>A3</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>
        
        ${isOwner ? html`<div class="listings-buttons">
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a href="javascript:void(0)" @click=${deleteListing} class="button-list">Delete</a>
        </div>` : ''}

    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const car = await getListingById(id);

    const userId = sessionStorage.getItem('userId');

    ctx.render(detailsTemplate(car, deleteListing, userId == car._ownerId));

    async function deleteListing() {
        await delListing(car._id);
        ctx.page.redirect('/all-listings');
    }
}