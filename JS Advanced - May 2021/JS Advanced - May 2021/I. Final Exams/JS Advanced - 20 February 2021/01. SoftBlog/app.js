function solve() {

   let newArticle = document.createElement('article');
   let author = document.querySelector('#creator');
   let title = document.querySelector('#title');
   let category = document.querySelector('#category');
   let content = document.querySelector('#content');
   let formBtn = document.querySelector('form button');
   let postsSection = document.querySelector('main section');

    // Archive Section
    let archiveSectionOl = document.querySelector('.archive-section ol');


   formBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // h1
      let h1 = document.createElement('h1');
      h1.textContent = title.value;

      // Category
      let catP = document.createElement('p');
      catP.textContent = 'Category:'
      let catStrong = document.createElement('strong');
      catStrong.textContent = `${category.value}`;
      catP.appendChild(catStrong);

      // Creator
      let creatorP = document.createElement('p');
      creatorP.textContent = 'Creator:'
      let creatorStrong = document.createElement('strong');
      creatorStrong.textContent = `${author.value}`;
      creatorP.appendChild(creatorStrong);

      // Content
      let contentP = document.createElement('p');
      contentP.textContent = content.value;

      // Div with buttons class
      let div = document.createElement('div');
      div.classList.add('buttons');

      // creating buttons
      let btnDelete = document.createElement('button');
      btnDelete.classList.add('btn', 'delete');
      btnDelete.textContent = 'Delete'

      let btnArchive = document.createElement('button');
      btnArchive.classList.add('btn', 'archive');
      btnArchive.textContent = 'Archive';

      div.appendChild(btnDelete);
      div.appendChild(btnArchive);

      // Child apppending
      newArticle.appendChild(h1);
      newArticle.appendChild(catP);
      newArticle.appendChild(creatorP);
      newArticle.appendChild(contentP);
      newArticle.appendChild(div)

      postsSection.appendChild(newArticle);

     

      // Add functionality to Archive button
      btnArchive.addEventListener('click', (e) => {
         let li = document.createElement('li');
         li.textContent = title.value;
         archiveSectionOl.appendChild(li);

         // Current article removal
         e.target.parentNode.parentNode.remove();
      });

      // Add functionality to Delete button
      btnDelete.addEventListener('click', (e) => {
         e.target.parentNode.parentNode.remove();
      });
   });

   let ol = [...document.getElementsByTagName('ol')];
   let lis = ol.children;
  
   console.log(lis);
   // lis.sort((a, b) => a.textContent.localeCompare(b.textContent));
}