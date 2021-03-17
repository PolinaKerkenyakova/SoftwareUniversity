function notDecreasingSequance(numberArray) {

    let result = [];
    let biggest = numberArray[0];

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] >= biggest) {
            result.push(numberArray[i]);
            biggest = numberArray[i];
        }
    }

    console.log(result.join(' '));
}

notDecreasingSequance([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
notDecreasingSequance([ 1, 2, 3, 4]);
notDecreasingSequance([ 20, 3, 2, 15, 6, 1]);