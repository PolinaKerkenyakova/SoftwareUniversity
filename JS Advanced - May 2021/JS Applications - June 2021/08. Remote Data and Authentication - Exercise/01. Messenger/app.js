const send = () => {
    document.querySelector('#submit').addEventListener('click', makePostRequest);
    document.querySelector('#refresh').addEventListener('click', loadCommnets);
}

const makePostRequest = async (e) => {
    e.preventDefault();

    const author = document.querySelector('#author');
    const content = document.querySelector('#content');
    const data = { author: author.value, content: content.value };

    fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    author.value = '';
    content.value = '';

    loadCommnets();
}

const loadCommnets = async () => {
    const result = [];
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();
    Object.values(data).forEach(c => {
        result.push(`${c.author}: ${c.content}`);
    });

    document.querySelector('#messages').textContent = result.join('\n');
}

send();
