function subSum(inputArr, startIndex, endIndex) {
    let numberArr = inputArr.slice(startIndex, endIndex);

    let sum = numberArr.reduce((a, x) => a + x);
    return sum;
}


function testSubSum(inputArr, startIndex, endIndex) {
    if (!Array.isArray(inputArr)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > inputArr.length - 1) {
        endIndex = inputArr.length - 1;
    }

    return inputArr
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((a, x) => a + x, 0);
}