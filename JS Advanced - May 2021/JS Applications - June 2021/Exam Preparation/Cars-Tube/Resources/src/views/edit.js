import { html } from '../../node_modules/lit-html/lit-html.js';
import { editListing, getListingById } from '../api/data.js';

const editTemplate = (car, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form id="edit-form" @submit=${onSubmit}>
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value="" .value=${car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value="" .value=${car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value="" .value=${car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value="" .value=${car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value="" .value=${car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value="" .value=${car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const car = await getListingById(id);

    ctx.render(editTemplate(car, onSubmit))
    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const brand = formData.get('brand');
        const model = formData.get('model');
        const description = formData.get('description');
        const year = Number(formData.get('year'));
        const imageUrl = formData.get('imageUrl');
        const price = Number(formData.get('price'));

        if (brand == '' || model == '' || description == '' || year == '' || imageUrl == '' || price == '') {
            return alert('All fields are required!');
        }

        const userId = sessionStorage.getItem('userId');

        if (userId !== null) {
            await editListing(car._id, { brand, model, description, year, imageUrl, price });
            ctx.page.redirect(`/details/${car._id}`);
        }
    }
}