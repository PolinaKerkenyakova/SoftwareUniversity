import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { userNavTemplate, guestNavTemplate } from './views/navigation.js';
import { logout } from './api/data.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { homePage } from './views/home.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { createPage } from './views/create.js';

const nav = document.querySelector('#container nav');
const main = document.querySelector('main')

page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/create', decorateContext, createPage)

setNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setNav = setNav;
    next();
}


function setNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId != null) {
        render(userNavTemplate(), nav);
        document.querySelector('#logoutBtn').addEventListener('click', async (e) => {
            await logout();
            render(guestNavTemplate(), nav);
            page.redirect('/login');
        });
    } else {
        render(guestNavTemplate(), nav);
    }
}