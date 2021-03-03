function equalSums(numbersArray) {

    let isLongEnought = true;
    let areEqual = false;
    let index = 0;

    for (let i = 0; i < numbersArray.length; i++) {

        if (numbersArray.length === 1) {
            console.log(0);
            isLongEnought = false;
            break;
        }

        let leftSum = 0;
        let rightSum = 0;

        // left sum
        for (let j = 0; j < i; j++) {
            leftSum += numbersArray[j];
        }

        //right sum
        for (let k = i + 1; k < numbersArray.length; k++) {
            rightSum += numbersArray[k];
        }

        if (leftSum === rightSum) {
            areEqual = true;
            index = i;
            break;
        }
    }

    if (areEqual) {
        console.log(index);
    } else if (!(areEqual) && isLongEnought) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);