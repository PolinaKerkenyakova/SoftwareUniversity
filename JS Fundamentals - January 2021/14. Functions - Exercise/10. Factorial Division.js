function factorialDivision(firstNum, secondNum) {

    let firstResult = multiplication(firstNum)
    let endResult = division(firstResult, secondNum);

    console.log(endResult);

    function division(multiplicationResult, num) {

        return Number(multiplicationResult / num).toFixed(2);
    }

    function multiplication(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i
        }

        return result;
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);