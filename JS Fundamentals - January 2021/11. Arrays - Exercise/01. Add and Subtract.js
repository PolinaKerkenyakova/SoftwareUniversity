function addAndSubstract(numberArray) {

    let sumOriginalArray = 0;
    let sumModifiedArray = 0;

    for (let i = 0; i < numberArray.length; i++) {
        sumOriginalArray += numberArray[i];

        if (numberArray[i] % 2 === 0) {
            numberArray[i] = numberArray[i] + i;
        } else {
            numberArray[i] = numberArray[i] - i;
        }

        sumModifiedArray += numberArray[i];
    }

    console.log(numberArray);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}

addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);