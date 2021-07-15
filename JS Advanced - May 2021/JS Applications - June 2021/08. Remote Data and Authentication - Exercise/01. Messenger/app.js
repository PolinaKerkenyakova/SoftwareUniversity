document.querySelector('#refresh').addEventListener('click', getAllMessages);
document.querySelector('#submit').addEventListener('click', createNewMessage)

async function getAllMessages() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    let messages = await response.json();

    const stringMessages = Object.values(messages).map(m => `${m.author}: ${m.content}`).join('\n');
    document.querySelector('#messages').value = stringMessages;
}

async function createNewMessage() {
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]');

    console.log(author, content);

    const sendMessageResponse = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: author.value, content: content.value })
    });

    const sentMessage = await sendMessageResponse.json();
    document.querySelector('#messages').value += `\n${sentMessage.author}: ${sentMessage.content}`;
    
    author.value = '';
    content.value = '';
}
