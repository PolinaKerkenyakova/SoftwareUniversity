function evenAndOddSubtractions(numbersArray) {

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            sumEven += numbersArray[i];
        } else {
            sumOdd += numbersArray[i];
        }
    }

    let result = sumEven - sumOdd;

    console.log(result);
}

evenAndOddSubtractions([1,2,3,4,5,6]);
evenAndOddSubtractions([3,5,7,9]);
evenAndOddSubtractions([2,4,6,8,10]);