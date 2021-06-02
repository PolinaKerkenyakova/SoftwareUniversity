function subtract(firstNumber, secondNumber) {

    firstNumber = Number(document.querySelector('#firstNumber').value);
    secondNumber = Number(document.querySelector('#secondNumber').value);

    let dispayDiv = document.querySelector('#result');

    dispayDiv.textContent = firstNumber - secondNumber;
}