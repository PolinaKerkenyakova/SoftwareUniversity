import { html } from '../../node_modules/lit-html/lit-html.js';

export const userNavTemplate = () => html`
<div class="container">
    <a class="navbar-brand" href="/">
        <img src="./images/idea.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/create">Create</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="logoutBtn" href="javascript:void(0)">Logout</a>
            </li>
        </ul>
    </div>
</div>`;

export const guestNavTemplate = () => html`
<div class="container">
    <a class="navbar-brand" href="/">
        <img src="./images/idea.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
            </li>
        </ul>
    </div>
</div>`;