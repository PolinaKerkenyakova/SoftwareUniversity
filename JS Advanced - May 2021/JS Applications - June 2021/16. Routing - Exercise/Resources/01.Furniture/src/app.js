import page from './../node_modules/page/page.mjs';

import { render } from './../node_modules/lit-html/lit-html.js';
import { logout } from './api/data.js';

import { createPage } from './views/create.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myFurniturePage } from './views/myFurniture.js';

page('/', decorateContext, dashboardPage);
page('/dashboard', decorateContext, dashboardPage);
page('/my-furniture', decorateContext, myFurniturePage);
page('/details/:id', decorateContext, detailsPage)
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);

const mainContainer = document.querySelector('.container');

setUserNav();
page.start(); //or page();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, mainContainer);
    ctx.setUserNav = setUserNav;
    next();
}

document.querySelector('#logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav()
    page.redirect('/');
});

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId !== null) {
        document.querySelector('#user').style.display = 'inline-block';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline-block';
    }
}

console.log(`The server data is changed in order to render the furniture pictures, when details button is clicked :) Start my server!`);