function solve() {

  const inputTextArea = Array.from(document.querySelectorAll('textarea'))[0];
  const resultTextArea = Array.from(document.querySelectorAll('textarea'))[1];

  const generateBtn = Array.from(document.querySelectorAll('button'))[0];
  const buyBtn = Array.from(document.querySelectorAll('button'))[1];

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    let input = JSON.parse(inputTextArea.value);

    input.forEach(obj => {

      let tr = document.createElement('tr');

      // Img
      let tdImg = document.createElement('td');
      let img = document.createElement('img');
      img.src = `${obj.img}`;
      tdImg.appendChild(img);

      // Name
      let tdName = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = `${obj.name}`
      tdName.appendChild(pName);

      // Price
      let tdPrice = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = `${Number(obj.price)}`
      tdPrice.appendChild(pPrice);

      // decFactor
      let tdDecFactor = document.createElement('td');
      let pFactor = document.createElement('p');
      pFactor.textContent = `${Number(obj.decFactor)}`;
      tdDecFactor.appendChild(pFactor);

      // Input
      let tdInput = document.createElement('td');
      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      tdInput.appendChild(input);


      // Append row's childs
      tr.appendChild(tdImg);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdDecFactor);
      tr.appendChild(tdInput);

      // Append row to tbody
      let tbody = document.querySelector('tbody');
      tbody.appendChild(tr);
    });
  }


  function buy() {
    let selectedProducts = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(x => x.parentNode.parentNode);

    let result = {
      furniture: [],
      totalSum: 0,
      decFactorSum: 0,
    }

    selectedProducts.forEach(product => {
      let name = [...product.querySelectorAll('p')][0];
      let price = [...product.querySelectorAll('p')][1];
      let decFactor = [...product.querySelectorAll('p')][2];

      result.furniture.push(name.textContent);
      result.totalSum += Number(price.textContent);
      result.decFactorSum += Number(decFactor.textContent);
    });

    resultTextArea.value += `Bought furniture: ${result.furniture.join(', ')}\nTotal price: ${result.totalSum.toFixed(2)}\nAverage decoration factor: ${(result.decFactorSum / result.furniture.length)}`
  }
}