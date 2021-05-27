function processOddPositions(inputArray) {

    let oddNumbers = [];

    // for (let i = 0; i < inputArray.length; i++) {
    //     if (i % 2 !== 0) {
    //         oddNumbers.push(inputArray[i]);
    //     }
    // }

    // oddNumbers = oddNumbers.map(num => num * 2).reverse();

    oddNumbers = inputArray.filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');

    console.log(oddNumbers);
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);