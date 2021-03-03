function integerOrFloat(firstNum, secondNum, thirdNUm) {

    let sum = firstNum + secondNum + thirdNUm;

    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303);