import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteMovie, getMovieById } from '../api/data.js';

const detailsTemplate = (movie, isOwner, deleteCurrMovie) => html`
<div class="row bg-light text-dark">
    <h1>Movie title: ${movie.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail" src="${movie.img}" alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous
            conspiracy with ties to her past arises. Comes on the screens 2020.</p>
        ${isOwner ? html`
        <a class="btn btn-danger" @click=${deleteCurrMovie} href="javascript:void(0)">Delete</a>
        <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>` : html`<a class="btn btn-primary"
            href="#">Like</a>`}
        <span class="enrolled-span">Liked 1</span>
    </div>
</div>
</div>`;

export async function detailsPage(ctx) {
    const userId = sessionStorage.getItem('userId');
    const id = ctx.params.id;
    const movie = await getMovieById(id);
    console.log(movie);
    ctx.render(detailsTemplate(movie, userId == movie._ownerId, deleteCurrMovie));

    async function deleteCurrMovie() {
        await deleteMovie(movie._id);
        ctx.page.redirect('/');
    }
}