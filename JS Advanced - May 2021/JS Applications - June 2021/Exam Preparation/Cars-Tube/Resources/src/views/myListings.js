import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllListings, getMyListings } from '../api/data.js';
import { listingTemplate } from '../views/common/listing.js';

const myListingsTemplate = (userList) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        ${userList.length > 0 ? html`${userList.map(listingTemplate)}` : html`<p class="no-cars">You haven't listed any cars yet.</p>`}
    </div>
</section>`;


export async function myListingsPage(ctx) {
    const userId = sessionStorage.getItem('userId');
    // const allListns = await getAllListings();
    // const userList = allListns.filter(car => car._ownerId === userId);
    const userList = await getMyListings(userId);



    console.log(userList);

    ctx.render(myListingsTemplate(userList));
}
