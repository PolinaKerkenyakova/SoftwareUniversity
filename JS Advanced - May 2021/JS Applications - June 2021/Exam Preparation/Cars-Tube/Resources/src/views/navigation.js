import { html } from '../../node_modules/lit-html/lit-html.js';


export const userNavTemplate = (username) => html`
<nav>
    <a class="active" href="/">Home</a>
    <a href="/all-listings">All Listings</a>
    <a href="/by-year">By Year</a>
    <div id="profile">
        <a>Welcome ${username}</a>
        <a href="/my-listings">My Listings</a>
        <a href="/create-listing">Create Listing</a>
        <a id="logoutBtn" href="javascript:void(0)">Logout</a>
    </div>
</nav>`;

export const guestNavTemplate = () => html`
<nav>
    <a class="active" href="/">Home</a>
    <a href="/all-listings">All Listings</a>
    <a href="/by-year">By Year</a>
    <!-- Guest users -->
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
</nav>`;