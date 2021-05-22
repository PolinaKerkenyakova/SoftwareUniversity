function biggerHalf(inputArray) {

    let sortedArray = inputArray.sort((a, b) => a - b);
    let length = sortedArray.length / 2
    let result = sortedArray.slice(length);
    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);