function maxNumber(numbersArray) {

    let maxNumbers = [];
    for (let i = 0; i < numbersArray.length; i++) {
        let currentNum = numbersArray[i];
        
        let isBigger = true;
        for (let j = i + 1; j < numbersArray.length; j++) {
            
            if (!(currentNum > numbersArray[j])) {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            maxNumbers.push(currentNum);
        }
    }

    console.log(maxNumbers.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);