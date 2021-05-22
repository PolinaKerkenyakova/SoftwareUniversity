function smallestTwoNumbers(inputArr) {

    let sortedArray = inputArr.sort((a, b) => a - b);
    let smallestTwo = sortedArray.slice(0, 2);
    console.log(smallestTwo);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);