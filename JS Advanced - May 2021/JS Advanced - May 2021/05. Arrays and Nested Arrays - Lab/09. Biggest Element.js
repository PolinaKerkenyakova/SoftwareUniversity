function biggestElement(inputArray) {

    let biggestElement = Number.MIN_SAFE_INTEGER;

    inputArray.forEach(checkRow);

    function checkRow(row) {
        row.forEach(checkNum)
    }

    function checkNum(num) {
        if (num > biggestElement) {
            biggestElement = num;
        }
    }

    return biggestElement;
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