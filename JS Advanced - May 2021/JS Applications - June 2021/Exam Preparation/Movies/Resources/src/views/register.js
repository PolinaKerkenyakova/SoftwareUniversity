import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit) => html`
<section id="form-sign-up">
    <form class="text-center border border-light p-5" action="#" method="post" @submit=${onSubmit}>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>`;

export function registerPage(ctx) {

    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const email = data.get('email');
        const password = data.get('password');
        const repeatPassword = data.get('repeatPassword');

        if (email == '' || password == '' || repeatPassword == '') {
            return alert('All fields are required!');
        }

        await register(email, password);
        ctx.page.redirect('/');
        ctx.setNav();
    }
}