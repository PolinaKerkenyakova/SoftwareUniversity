function search() {

   let liElements = document.querySelectorAll('li');
   let input = document.querySelector('#searchText').value;
   let result = document.querySelector('#result');

   let matchesFound = 0;

   for (const li of liElements) {
      if (li.textContent.includes(input)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         matchesFound++
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }

   result.textContent = `${matchesFound} matches found`
}
