function aggregateElements(inputArr) {

    let totalSum = 0;
    let inverseSum = 0;
    let concatNum = '';


    for (let num of inputArr) {
        totalSum += num;
        inverseSum += 1 / num;
        concatNum += num;
    }

    console.log(totalSum);
    console.log(inverseSum);
    console.log(concatNum);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);