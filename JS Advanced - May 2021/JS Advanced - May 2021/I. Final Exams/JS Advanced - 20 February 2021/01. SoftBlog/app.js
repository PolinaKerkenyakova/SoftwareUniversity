function solve() {
   let createBtn = document.querySelector('form .create');

   createBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // Getting Data from Input Fields
      let author = document.querySelector('#creator');
      let title = document.querySelector('#title');
      let category = document.querySelector('#category');
      let content = document.querySelector('#content');

      let sectionPosts = document.querySelector('main section');

      // Creating the atricle

      let article = document.createElement('article');

      // h1
      let h1 = document.createElement('h1');
      h1.textContent = title.value;

      // Paragraph for the category
      let pCategory = document.createElement('p');
      pCategory.textContent = 'Category:'

      let strongCategory = document.createElement('strong');
      strongCategory.textContent = category.value;

      pCategory.appendChild(strongCategory);

      // Paragraph for the creator
      let pCreator = document.createElement('p');
      pCreator.textContent = 'Creator:';

      let strongCreator = document.createElement('strong');
      strongCreator.textContent = author.value;

      pCreator.appendChild(strongCreator);

      // Paragraph for the content
      let pContent = document.createElement('p');
      pContent.textContent = content.value;

      // Div container for the buttons
      let divButtons = document.createElement('div');
      divButtons.setAttribute('class', 'buttons');

      // Delete button
      let btnDelete = document.createElement('button');
      btnDelete.classList.add('btn', 'delete');
      btnDelete.textContent = 'Delete';

      // Archive button
      let btnArchive = document.createElement('button');
      btnArchive.classList.add('btn', 'archive');
      btnArchive.textContent = 'Archive';

      divButtons.appendChild(btnDelete);
      divButtons.appendChild(btnArchive);

      // Appending article's children
      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(divButtons);

      sectionPosts.appendChild(article);

      // Adding functionality to the article buttons
      btnDelete.addEventListener('click', (e) => {
         e.target.parentNode.parentNode.remove();
      });

      btnArchive.addEventListener('click', (e) => {
         // Selecting ol inside Archive section
         let olArchive = document.querySelector('.archive-section ol');

         let clickedArticle = e.target.parentNode.parentNode;
         let title = clickedArticle.querySelector('h1').textContent;

         // Creating new li
         let liArchive = document.createElement('li');
         liArchive.textContent = title;

         olArchive.appendChild(liArchive);

         // Sorting lis in the archive section
         Array.from(olArchive.children).sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => olArchive.appendChild(li));

         clickedArticle.remove();
      });

      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
   });
}