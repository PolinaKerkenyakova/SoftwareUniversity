import { html } from '../../node_modules/lit-html/lit-html.js';

export const userNavTemplate = (email) => html`
<a class="navbar-brand text-light" href="/">Movies</a>
<ul class="navbar-nav ml-auto ">
    <li class="nav-item">
        <a class="nav-link">Welcome, ${email}</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="logoutBtn" href="javascript:void(0)">Logout</a>
    </li>
</ul>`;

export const guestNavTemplate = () => html`
<a class="navbar-brand text-light" href="/">Movies</a>
<ul class="navbar-nav ml-auto">
    <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/register">Register</a>
    </li>
</ul>`;