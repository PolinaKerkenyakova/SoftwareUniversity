import { html } from '../../node_modules/lit-html/lit-html.js';
import { createNewMovie } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<form class="text-center border border-light p-5" action="#" method="" @submit=${onSubmit}>
    <h1>Add Movie</h1>
    <div class="form-group">
        <label for="title">Movie Title</label>
        <input type="text" class="form-control" placeholder="Title" name="title" value="">
    </div>
    <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Description" name="description"></textarea>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        const title = data.get('title');
        const description = data.get('description');
        const img = data.get('imageUrl');

        if (title == '' || description == '' || img == '') {
            return alert('All fields are required!')
        }

        await createNewMovie({ title, description, img, usersLiked: [] });
        ctx.page.redirect('/');
    }
}