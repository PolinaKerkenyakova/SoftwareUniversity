function sumEvenNumbers(numbersArray) {

let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        if (Number(numbersArray[i]) % 2 === 0) {
            sum += Number(numbersArray[i]);
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);

