import { html } from '../../node_modules/lit-html/lit-html.js';
import { addLikeToMovie, deleteMovie, getMovieById, getMovieLikes } from '../api/data.js';

const detailsTemplate = (movie, deleteCurrMovie, isOwner, isUser, addLike, likes) => html`
<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="${movie.img}"
                    alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3">Movie Description</h3>
                <p>${movie.description}</p>
                ${isOwner ? html`
                <a class="btn btn-danger" @click=${deleteCurrMovie} href="javascript:void(0)">Delete</a>
                <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>` : ''}
                ${isUser ? html` <a class="btn btn-primary" href="javascript:void(0)" @click=${addLike}>Like</a>` : ''}
                <span class="enrolled-span">Liked ${likes}</span>
            </div>
        </div>
    </div>
</section>`;


export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const movie = await getMovieById(id);
    const userId = sessionStorage.getItem('userId')
    const isUser = sessionStorage.getItem('userId')
    const likes = await getMovieLikes(id);


    ctx.render(detailsTemplate(movie, deleteCurrMovie, userId == movie._ownerId, isUser !== null && isUser !== movie._ownerId, addLike, likes));


    async function deleteCurrMovie(e) {
        await deleteMovie(movie._id);
        ctx.page.redirect('/');
    }

    async function addLike() {
        await addLikeToMovie({movieId: movie._id })
    }
    
}