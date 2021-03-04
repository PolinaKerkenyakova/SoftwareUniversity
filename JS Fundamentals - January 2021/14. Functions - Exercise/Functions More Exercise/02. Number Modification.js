function numberModification(number) {

    let numberString = number.toString();

    let sum = 0;
    for (let i = 0; i < numberString.length; i++) {
        sum += Number(numberString[i]);
    }


    if (sum / numberString.length >= 5) {
        console.log(number)
        return;
    }

    let sumString = numberString;
    while (true) {
        
        sumString += '9';

        let afterAddition = 0;
        for (let i = 0; i < sumString.length; i++) {
            afterAddition += Number(sumString[i]);
        }

        if (afterAddition / sumString.length >= 5) {
            console.log(sumString)
            break;
        }
    }
}

numberModification(101);
// numberModification(5835);