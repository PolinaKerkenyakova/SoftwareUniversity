import page from './../node_modules/page/page.mjs';
import { render } from './../node_modules/lit-html/lit-html.js';
import { homePage } from './views/home.js';
import { browsePage } from './views/browse.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout as logoutApi } from './api/data.js';

const main = document.querySelector('main');
document.querySelector('#logoutBtn').addEventListener('click', logout);


page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/browse', decorateContext, browsePage)
page('/login', decorateContext, loginPage)
page('/register', decorateContext, registerPage)
page('/my-teams', decorateContext,)

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
        [...document.querySelectorAll('nav a.user')].forEach(x => x.style.display = 'block');
        [...document.querySelectorAll('nav a.guest')].forEach(x => x.style.display = 'none');
    } else {
        [...document.querySelectorAll('nav a.user')].forEach(x => x.style.display = 'none');
        [...document.querySelectorAll('nav a.guest')].forEach(x => x.style.display = 'block');
    }
}

async function logout() {
    await logoutApi();
    setUserNav();
    page.redirect('/');
}