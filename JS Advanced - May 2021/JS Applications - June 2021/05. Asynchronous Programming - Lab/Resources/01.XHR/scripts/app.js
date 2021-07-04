function loadRepos() {
   const httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange', () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
         document.querySelector('#res').textContent = httpRequest.responseText;
      }
   });

   httpRequest.open('GET', 'https://api.github.com/users/testnakov/repos');
   httpRequest.send();
}