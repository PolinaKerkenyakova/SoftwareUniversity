function factorialDivision(firstNum, secondNum) {

    let firstFactorial = 1;
    for (let i = firstNum; i >= 1; i--) {
    firstFactorial *= i;
    }

    let secondFactorial = 1;
    for (let i = secondNum; i >= 1; i--) {
        secondFactorial *= i;
        }
    
        console.log((firstFactorial / secondFactorial).toFixed(2))
}

factorialDivision(5, 2);
factorialDivision(6, 2);