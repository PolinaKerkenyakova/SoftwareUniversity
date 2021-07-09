const solution = async () => {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();
    data.map(createArticle);
}

solution();

const createArticle = (article) => {
    // Main div
    const mainDiv = e('div', null, 'accordion', null);

    // Inside main div
    const headDiv = e('div', null, 'head', null);
    const headingSpan = e('span', article.title, null, null);
    const button = e('button', 'More', 'button', article._id);
    button.addEventListener('click', getAdditionalInfo);

    headDiv.appendChild(headingSpan);
    headDiv.appendChild(button);

    const extraDiv = e('div', null, 'extra', null);
    let p = e('p', null, null, null);
    extraDiv.appendChild(p);

    mainDiv.appendChild(headDiv);
    mainDiv.appendChild(extraDiv);

    document.querySelector('#main').appendChild(mainDiv);
}

const getAdditionalInfo = async (e) => {

    let button = e.target;
    let article = button.parentNode.parentNode;
    let divExtra = article.querySelector('.extra');
    let p = article.querySelector('.extra p');

    let response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${button.id}`);
    let data = await response.json();
    p.textContent = data.content;

    if (button.textContent === 'More') {
        divExtra.style.display = 'block';
        button.textContent = 'Less';
    } else if (button.textContent === 'Less') {
        divExtra.style.display = 'none';
        button.textContent = 'More';
    }
}


const e = (type, text, classAttribute, idAttribute) => {
    const element = document.createElement(type);

    if (text) { element.textContent = text; }

    if (idAttribute) { element.setAttribute('id', idAttribute) }

    if (classAttribute) { element.classList.add(classAttribute); }

    return element;
}