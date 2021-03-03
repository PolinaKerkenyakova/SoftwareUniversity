function amazingNumbers(number) {

    let numberToString = number.toString();

    let sum = 0;
    let isAmazing = false;

    for (let i = 0; i < numberToString.length; i++) {
        sum += Number(numberToString[i]);
    }

    sumToString = sum.toString();

    for (let i = 0; i < sumToString.length; i++) {
        if (sumToString[i] === '9') {
            isAmazing = true;
        }
    }

    if (isAmazing) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
        
    }
}

amazingNumbers(1233);
amazingNumbers(999);