function create(words) {

   let contentDiv = document.querySelector('#content');
   for (let word of words) {
      let newDiv = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      newDiv.appendChild(p);
      newDiv.addEventListener('click', showParagraph);
      contentDiv.appendChild(newDiv);
   }

   function showParagraph(event) {
      let divParent = event.target.children;
      divParent[0].style.display = 'block';
   }
}