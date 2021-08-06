import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit) => html`
<form class="text-center border border-light p-5" action="" method="" @submit=${onSubmit}>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Email" name="email" value="">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" name="password" value="">
    </div>

    <button type="submit" class="btn btn-primary">Login</button>
</form>`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const email = data.get('email');
        const password = data.get('password');


        try {
            if (email == '' || password == '') {
                throw new Error('Invalid email or password!');
            }
            await login(email, password);
            ctx.page.redirect('/');
            ctx.setNav();
        } catch (error) {
            return alert(error.message);
        }
    }
}