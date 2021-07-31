import { html } from '../../node_modules/lit-html/lit-html.js';
import { createNewMeme } from '../api/data.js';

const createTemplate = (onCreate) => html`
<section id="create-meme">
    <form @submit=${onCreate} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;

export function createPage(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');

        if (title == '' || description == '' || imageUrl == '') {
            return alert('All fields must be entered!')
        }

        await createNewMeme({title, description, imageUrl});
        ctx.page.redirect('/all-memes')
    }
}