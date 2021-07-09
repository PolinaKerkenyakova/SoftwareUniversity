function attachEvents() {
    document.querySelector('#btnLoadPosts').addEventListener('click', loadOptions);
    document.querySelector('#btnViewPost').addEventListener('click', getData);
}

const loadOptions = async () => {
    document.querySelector('#btnLoadPosts').disabled = true;
    const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const posts = await response.json();

    Object.values(posts).map(createOptions);
}

const createOptions = (post) => {
    const selectPosts = document.querySelector('#posts');
    const option = document.createElement('option');
    option.textContent = post.title;
    option.setAttribute('id', post.id);
    selectPosts.appendChild(option);
}

const getData = async () => {
    const option = document.querySelector('#posts');
    let id = option.options[option.selectedIndex].id;

    const [responseComments, responsePosts] = await Promise.all([
        fetch('http://localhost:3030/jsonstore/blog/comments/'),
        fetch('http://localhost:3030/jsonstore/blog/posts')
    ]);

    const [comments, posts] = await Promise.all([
        responseComments.json(),
        responsePosts.json()
    ]);

    const filteredComments = Object.values(comments).filter(c => c.postId === id);
    const post = Object.values(posts).find(p => p.id === id);
    document.querySelector('#post-comments').innerHTML = '';
    createFinalPost(post, filteredComments)
}

const createFinalPost = (post, filteredComments) => {
    document.querySelector('#post-title').textContent = post.title;
    document.querySelector('#post-body').textContent = post.body;
    const commetsUl = document.querySelector('#post-comments');

    filteredComments.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c.text
        commetsUl.appendChild(li);
    });
}

attachEvents();