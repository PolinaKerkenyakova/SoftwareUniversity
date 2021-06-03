function solve() {
  let textArea = document.querySelector('#input');
  let text = textArea.value;
  let outputField = document.querySelector('#output')

  let sentances = text.split('.').map(x => x.trim()).filter(x => x.length > 0);
  // sentances = sentances.map(x => x.trim());
  // sentances = sentances.filter(x => x.length > 0);


  for (let i = 0; i < sentances.length; i += 3) {
    let arr = [];

    for (let j = 0; j < 3; j++) {
      if (sentances[j + i]) {
        arr.push(sentances[j + i]);
      }
    }

    let paragraph = arr.join('. ') + '.';
    outputField.innerHTML += `<p>${paragraph}</p>`;
  }
}