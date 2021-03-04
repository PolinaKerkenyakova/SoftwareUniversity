function signChecks(fisrtNum, secondNum, thirdNum) {

    let result = fisrtNum * secondNum * thirdNum;
    let output = '';
    if (result >= 0) {
        output = 'Positive';
    } else {
        output = 'Negative';
    }

    return output;
}

console.log(signChecks(5, 12, -15));    //Negative
console.log(signChecks(-6, -12, -14));  //Negative
console.log(signChecks(-1, -2, -3));    //Negative
console.log(signChecks(-1, 0, 1));      //Positive