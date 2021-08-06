import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { guestNavTemplate, userNavTemplate } from './views/navigation.js';
import { logout } from './api/data.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';

const main = document.querySelector('main');
const nav = document.querySelector('#container nav');

page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);

setNav();
page.start();

function decorateContext(ctx,next) {
    ctx.render = (content) => render(content, main);
    ctx.setNav = setNav;
next();
}

function setNav() {
    const userId = sessionStorage.getItem('userId');
    const email = sessionStorage.getItem('email')
    if (userId != null) {
        render(userNavTemplate(email), nav);
        document.querySelector('#logoutBtn').addEventListener('click', async (e) => {
            await logout();
            page.redirect('/login');
            render(guestNavTemplate(), nav);
        });
    } else {
        render(guestNavTemplate(), nav);
    }
}