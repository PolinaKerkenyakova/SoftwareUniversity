function notDecreasingSequance(numberArray) {

    let biggerNumber = 0;
    let modifiedArray = [];

    for (let i = 0; i < numberArray.length; i++) {
        if (biggerNumber < numberArray[i]) {
            biggerNumber = numberArray[i];
        }
        
        modifiedArray.push(biggerNumber);

    }
}

notDecreasingSequance([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
notDecreasingSequance([ 1, 2, 3, 4]);
notDecreasingSequance([ 20, 3, 2, 15, 6, 1]);