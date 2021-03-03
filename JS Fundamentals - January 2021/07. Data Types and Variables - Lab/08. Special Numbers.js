function specialNumbers(number) {

    for (let i = 1; i <= number; i++) {

        let currentNum = i;

        let numberToString = currentNum.toString();
        let sum = 0;

        for (let j = 0; j < numberToString.length; j++) {
            sum += Number(numberToString[j]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);