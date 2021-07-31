import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { guestNavTemplate, userNavTemplate } from './views/navigation.js';
import { logout } from './api/data.js';
import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';


const main = document.querySelector('#container');
const nav = document.querySelector('nav');

page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/register', decorateContext, registerPage)
page('/login', decorateContext, loginPage);
page('/dashboard', decorateContext, dashboardPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        render(userNavTemplate(), nav);
        document.querySelector('#logoutBtn').addEventListener('click', async () => {
            await logout();
            render(guestNavTemplate(), nav);
        })
    } else {
        render(guestNavTemplate(), nav);
    }
}