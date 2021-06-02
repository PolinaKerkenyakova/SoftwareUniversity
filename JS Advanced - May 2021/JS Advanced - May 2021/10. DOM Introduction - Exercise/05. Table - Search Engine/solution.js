function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let trElements = document.querySelectorAll('tbody tr');
      let input = document.querySelector('#searchField');
      let inputValue = input.value;

      for (let tr of trElements) {
         if (tr.textContent.includes(inputValue)) {
            tr.classList.add("select");
         } else {
            tr.classList.remove("select");
         }
      }

      input.value = '';
   }
}