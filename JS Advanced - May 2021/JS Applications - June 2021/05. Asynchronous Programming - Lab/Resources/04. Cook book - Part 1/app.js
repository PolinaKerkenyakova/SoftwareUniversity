const loadRecipes = async () => {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    const recepies = await response.json();
    document.querySelector('main').innerHTML = '';
    Object.values(recepies).map(createArticle)
}

window.addEventListener('load', loadRecipes);

const createArticle = (recipe) => {
    const article = document.createElement('article');
    article.classList.add('preview');
    article.setAttribute('id', recipe._id);

    let divTitle = document.createElement('div');
    divTitle.classList.add('title');
    let h2 = document.createElement('h2');
    h2.textContent = recipe.name;
    divTitle.appendChild(h2);

    let divImage = document.createElement('div');
    divImage.classList.add('small');
    let img = document.createElement('img');
    img.setAttribute('src', recipe.img);
    divImage.appendChild(img);

    article.appendChild(divTitle);
    article.appendChild(divImage);

    article.addEventListener('click', renderFullArticle);

    document.querySelector('main').appendChild(article);
}

const renderFullArticle = async (event) => {

    const article = event.currentTarget;
    const clickedArticleId = article.getAttribute('id')

    const response = await fetch(` http://localhost:3030/jsonstore/cookbook/details/${clickedArticleId}`);
    const data = await response.json();

    const newArticle = document.createElement('article');

    let h2 = document.createElement('h2');
    h2.textContent = data.name;

    newArticle.appendChild(h2);

    // div with class band
    const divBand = document.createElement('div');
    divBand.classList.add('band');
    //
    const divThumb = document.createElement('div');
    divThumb.classList.add('thumb');

    const img = document.createElement('img');
    img.setAttribute('src', data.img);

    divThumb.appendChild(img);
    //
    const divIngredients = document.createElement('div');
    divIngredients.classList.add('ingredients');

    const h3Ingredients = document.createElement('h3');
    h3Ingredients.textContent = 'Ingredients:';

    const ul = document.createElement('ul');
    data.ingredients.forEach(i => {
        let li = document.createElement('li');
        li.textContent = i;
        ul.appendChild(li);
    });

    divIngredients.appendChild(h3Ingredients);
    divIngredients.appendChild(ul);

    divBand.appendChild(divThumb);
    divBand.appendChild(divIngredients);

    // div with class description
    const divDescription = document.createElement('div');
    divDescription.classList.add('description');

    const h3Preparation = document.createElement('h3');
    h3Preparation.textContent = 'Preparation:';

    divDescription.appendChild(h3Preparation);

    data.steps.forEach(s => {
        let p = document.createElement('p');
        p.textContent = s;
        divDescription.appendChild(p);
    })

    // append both main divs
    newArticle.appendChild(divBand);
    newArticle.appendChild(divDescription);

    article.parentNode.replaceChild(newArticle, article);

    newArticle.addEventListener('click', () => {
        newArticle.parentNode.replaceChild(article, newArticle);
    });
}