function solve(text, casingType) {

  text = document.querySelector('#text').value;
  casingType = document.querySelector('#naming-convention').value;
  let resultField = document.querySelector('#result');

  let output = '';
  text = text.toLowerCase();

  let words = text.split(' ');
  if (casingType === 'Camel Case') {
    words.forEach((word, i) => {
      if (i !== 0) {
        output += capitalize(word);
      } else {
        output += word
      }
    });

  } else if (casingType === 'Pascal Case') {
    words.forEach((word) => {
      output += capitalize(word);
    });

  } else {
    output = 'Error!';
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  resultField.textContent += `${output}`
}

// solve("this is an example", "Camel Case");
// solve("secOND eXamPLE", "Pascal Case");
// solve("Invalid Input", "Another Case");