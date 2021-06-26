function solve() {

   let createBtn = document.querySelector('form button');

   let authorField = document.querySelector('#creator');
   let titleField = document.querySelector('#title');
   let categoryField = document.querySelector('#category');
   let contentField = document.querySelector('#content');

   createBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // Creating new article
      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = titleField.value;

      let pCategory = document.createElement('p');
      pCategory.textContent = 'Category:';
      let strongCategory = document.createElement('strong');
      strongCategory.textContent = categoryField.value;
      pCategory.appendChild(strongCategory);

      let pCreator = document.createElement('p');
      pCreator.textContent = 'Creator:';
      let strongCreator = document.createElement('strong');
      strongCreator.textContent = authorField.value;
      pCreator.appendChild(strongCreator);

      let pContent = document.createElement('p');
      pContent.textContent = contentField.value;

      let div = document.createElement('div');
      div.classList.add('buttons');

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'delete');
      deleteBtn.textContent = 'Delete';

      let archiveBtn = document.createElement('button');
      archiveBtn.classList.add('btn', 'archive');
      archiveBtn.textContent = 'Archive';

      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      // Appending article's children
      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(div);

      // Appending the article to the Posts Section
      let postsSection = document.querySelector('main section');

      postsSection.appendChild(article);

      // Adding functionality to the article's buttons
      deleteBtn.addEventListener('click', (e) => {
         e.currentTarget.parentNode.parentNode.remove();
      });

      archiveBtn.addEventListener('click', (e) => {
         let archiveOl = document.querySelector('.archive-section ol');

         let currentArticle = e.currentTarget.parentNode.parentNode;
         let currentH1 = currentArticle.querySelector('h1');
         let li = document.createElement('li');
         li.textContent = currentH1.textContent;

         archiveOl.appendChild(li);

         // Sorting archive lis
         let archiveLis = Array.from(archiveOl.querySelectorAll('li'));

         archiveLis.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent);
         });
         
         archiveLis.forEach(li => {
            archiveOl.appendChild(li);
         });

         e.currentTarget.parentNode.parentNode.remove();
      });

      // Clearing the input fields
      authorField.value = '';
      titleField.value = '';
      categoryField.value = '';
      contentField.value = '';
   });
}
