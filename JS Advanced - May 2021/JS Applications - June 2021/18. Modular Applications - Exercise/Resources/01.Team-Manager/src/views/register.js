import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit, errorMessage) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form id="register-form" class="main-form pad-large" @submit=${onSubmit}>
            ${errorMessage ? html`<div class="error">${errorMessage}</div>` : ''}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const rePassword = formData.get('repass');

        try {
            if (email == '' || username == '' || password == '') {
                throw new Error('All fields should be entered!');
            }

            if (password !== rePassword) {
                throw new Error('Passwords should match!');
            }

            await register(email, username, password);
            ctx.setUserNav();
            ctx.page.redirect('/my-teams');
        } catch (error) {
            ctx.render(registerTemplate(onSubmit, error.message))
        }
    }
}