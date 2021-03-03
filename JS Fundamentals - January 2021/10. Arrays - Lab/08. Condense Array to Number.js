function condenseArrayToNumber(numArray) {

    while (numArray.length - 1 >= 1) {
        
        let temp = [];
        for (let i = 0; i < numArray.length - 1; i++) {
            temp[i] =  numArray[i] + numArray[i + 1];
        }

        numArray = temp;
    }

    console.log(numArray[0]);
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);