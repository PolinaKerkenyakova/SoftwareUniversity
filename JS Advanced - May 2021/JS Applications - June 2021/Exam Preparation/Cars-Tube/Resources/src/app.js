import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { userNavTemplate, guestNavTemplate } from '../src/views/navigation.js';
import { logout } from './api/data.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { homePage } from './views/home.js';
import { allListingsPage } from './views/allListings.js';
import { createListingPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myListingsPage } from './views/myListings.js';

const nav = document.querySelector('header nav');
const main = document.querySelector('#site-content');

page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/all-listings', decorateContext, allListingsPage);
page('/create-listing', decorateContext, createListingPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/my-listings', decorateContext, myListingsPage);


setUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId !== null) {
        const username = sessionStorage.getItem('username');
        render(userNavTemplate(username), nav);
        document.querySelector('#logoutBtn').addEventListener('click', async () => {
            await logout();
            render(guestNavTemplate(), nav);
            page.redirect('/');

        });
    } else {
        render(guestNavTemplate(), nav);
    }
}