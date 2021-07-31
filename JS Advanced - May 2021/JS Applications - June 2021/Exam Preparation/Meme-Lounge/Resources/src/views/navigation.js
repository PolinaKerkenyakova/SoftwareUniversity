import { html } from '../../node_modules/lit-html/lit-html.js';

export const userNavTemplate = () => html`
<a href="/all-memes">All Memes</a>
<div class="user">
    <a href="/create">Create Meme</a>
    <div class="profile">
        <span>Welcome, ${sessionStorage.getItem('email')}</span>
        <a href="/my-profile">My Profile</a>
        <a id="logoutBtn" href="javascript:void(0)">Logout</a>
    </div>
</div>`

export const guestNavTemplate = () => html`
<a href="/all-memes">All Memes</a>
<div class="guest">
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/">Home Page</a>
</div>`;




