import { createPostHTML } from "./newPostHTML.js";

const topicContainer = document.querySelector('.topic-container');
const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
const posts = await response.json();
Object.values(posts).forEach(post => topicContainer.appendChild(createPostHTML(post)));

const form = document.querySelector('.new-topic-border form');
form.addEventListener('submit', createNewPost);

document.querySelector('.new-topic-buttons .cancel').addEventListener('click', form.reset());

async function createNewPost(e) {
    try {
        e.preventDefault();

        const formData = new FormData(e.target);

        const title = formData.get('topicName');
        const username = formData.get('username');
        const post = formData.get('postText');

        if (!title || !username || !post) {
            throw new Error('All fields must be entered')
        }

        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, username, post })
        });
        if (response.ok) {
            form.reset();
            const post = await response.json();
            topicContainer.appendChild(createPostHTML(post))
        }
    } catch (error) {
        alert(error)
    }
}