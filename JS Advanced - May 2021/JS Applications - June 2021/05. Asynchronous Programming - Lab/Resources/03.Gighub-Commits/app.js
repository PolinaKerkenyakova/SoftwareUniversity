function loadCommits() {
    let username = document.querySelector('#username').value;
    let repo = document.querySelector('#repo').value;
    document.querySelector('#commits').innerHTML = '';
    
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status)
            }
        })
        .then(data => {
            showCommits(data);
        })
        .catch(err => {
            showError(err.message);
        });
}

const showError = (err) => {
    liCreator(`${err} (Not Found)`);
}

const showCommits = (data) => {
    data.forEach(c => {
        liCreator(`${c.commit.author.name}: ${c.commit.message}`)
    });
}

const liCreator = (input) => {
    let ul = document.querySelector('#commits');
    let li = document.createElement('li');
    li.textContent = input;
    ul.appendChild(li);
}