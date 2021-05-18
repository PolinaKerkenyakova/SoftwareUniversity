function mathOperations(firsrNum, secondNum, operator) {

    let result = 0;

    switch (operator) {
        case '+':
            result = firsrNum + secondNum;
            break;
        case '-':
            result = firsrNum - secondNum;
            break;
        case '*':
            result = firsrNum * secondNum;
            break;
        case '/':
            result = firsrNum / secondNum;
            break;
        case '%':
            result = firsrNum % secondNum;
            // result = ((firsrNum - secondNum) / firsrNum) * 100;
            break;
        case '**':
            result = Math.pow(firsrNum, secondNum);
            break;
    }

    console.log(result)
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');