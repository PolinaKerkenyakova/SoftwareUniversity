function greatersCommonDivisor(firstNum, secondNum) {

    let divisor = 1;
    let greatestDivisor = 0;

    while (divisor <= firstNum && divisor <= secondNum) {
        if (firstNum % divisor === 0 && secondNum % divisor === 0) {
            greatestDivisor = divisor;
        }

       divisor++;
    }

    console.log(greatestDivisor)
}

greatersCommonDivisor(15, 5);
greatersCommonDivisor(2154, 458);