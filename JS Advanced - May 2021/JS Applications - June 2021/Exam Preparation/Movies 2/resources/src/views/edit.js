import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMovieById, updateMovie } from '../api/data.js';

const editTemplate = (movie, onSubmit) => html`
<form class="text-center border border-light p-5" action="#" method="" @submit=${onSubmit}>
    <h1>Edit Movie</h1>
    <div class="form-group">
        <label for="title">Movie Title</label>
        <input type="text" class="form-control" placeholder="Movie Title" value="" name="title" .value=${movie.title}>
    </div>
    <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Movie Description..." name="description"
            .value=${movie.description}></textarea>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input type="text" class="form-control" placeholder="Image Url" value="" name="imageUrl" .value=${movie.img}>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const movie = await getMovieById(id);
    ctx.render(editTemplate(movie, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        const title = data.get('title');
        const description = data.get('description');
        const img = data.get('imageUrl');

        await updateMovie(movie._id, { title, description, img });
        ctx.page.redirect(`/details/${movie._id}`);
    }
}