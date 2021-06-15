function solve() {

   // Add button functionality
   let totalSum = 0;
   const productList = new Set();

   const addBtns = [...document.querySelectorAll('.add-product')];
   const textArea = document.querySelector('textarea');

   addBtns.forEach(btn => {
      btn.addEventListener('click', onClick);
   });

   function onClick(e) {
      const product = e.currentTarget.parentNode.parentNode.children;
      const productName = product[1].children[0].textContent;
      const productPrice = Number(product[3].textContent);

      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`

      totalSum += productPrice;
      productList.add(productName);
   }


   // Checkout button functionality

   const checkoutBtn = document.querySelector('.checkout');

   checkoutBtn.addEventListener('click', checkout);

   function checkout(e) {
      textArea.textContent += `You bought ${[...productList].join(', ')} for ${totalSum.toFixed(2)}.`

      addBtns.forEach(btn => {
         btn.disabled = true;
      });

      checkoutBtn.disabled = true;
   }
}