function mathOperations(firstNum,secondNum, thirdNum) {

    let sum = sumTwoNumbers(firstNum, secondNum);
    let result = subtract(sum, thirdNum);

    console.log(result);

    function sumTwoNumbers(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
}

mathOperations(23,6,10);