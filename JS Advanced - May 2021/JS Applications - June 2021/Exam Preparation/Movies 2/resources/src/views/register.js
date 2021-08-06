import { html } from '../../node_modules/lit-html/lit-html.js';

const registerTemplate = (onSubmit) => html`
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
</form>`;


export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));
    async function onSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const email = data.get('email');
        const password = data.get('password');
        const repeatPassword = data.get('repeatPassword');


        try {
            if (email == '' || password == '') {
                throw new Error('Invalid email or password!');
            }

            if (password !== repeatPassword) {
                throw new Error('Passwords should match!');
            }
            
            await login(email, password);
            ctx.page.redirect('/');
            ctx.setNav();
        } catch (error) {
            return alert(error.message);
        }
    }
}