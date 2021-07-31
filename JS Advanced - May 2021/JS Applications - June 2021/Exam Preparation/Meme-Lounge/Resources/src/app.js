import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout as logoutApi } from './api/data.js';

import { userNavTemplate, guestNavTemplate } from './views/navigation.js';
import { homePage } from './views/home.js';
import { allMemesPage } from './views/allMemes.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

const main = document.querySelector('main');
const nav = document.querySelector('nav');

page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/all-memes', decorateContext, allMemesPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/my-profile', decorateContext, profilePage);

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
        render(userNavTemplate(), nav);

        document.querySelector('#logoutBtn').addEventListener('click', async (e) => {
            await logoutApi();
            render(guestNavTemplate(), nav);
            page.redirect('/');
        });

        page.redirect('/all-memes');
    } else {
        render(guestNavTemplate(), nav);
        page.redirect('/');
    }
}