function calc() {
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    let sumField = document.querySelector('#sum');

    sumField.value = Number(firstNum) + Number(secondNum);
}
