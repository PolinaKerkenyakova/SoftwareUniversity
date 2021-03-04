function simpleCalculator(firstNum, secondNum, operator) {

    let result = 0;
    switch (operator) {
        case 'add':
            result = firstNum + secondNum;
            break;
        case 'subtract':
            result = firstNum - secondNum;
            break;
        case 'multiply':
            result = firstNum * secondNum;
            break;
        case 'divide':
            result = firstNum / secondNum;
    }

    return result;
}

console.log(simpleCalculator(5, 5, 'multiply'));    //25
console.log(simpleCalculator(40, 8, 'divide'));     //5
console.log(simpleCalculator(12, 19, 'add'));       //31
console.log(simpleCalculator(50, 13, 'subtract'));  //37