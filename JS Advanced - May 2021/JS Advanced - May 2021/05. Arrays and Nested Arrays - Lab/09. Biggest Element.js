function biggestElement(inputArray) {

    let biggestNum = 0;
    inputArray.forEach(row);

    function row(currentRow) {
        currentRow.forEach(checkForBiggestNum);
    }

    function checkForBiggestNum(num) {
        if (biggestNum < num) {
            biggestNum = num;
        }

        return biggestNum;
    }

    console.log(biggestNum);
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);