function processOddNumbers(numArray) {

    let oddNumbers = [];

    for (let i = 0; i < numArray.length; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(numArray[i]);
        }
    }

  oddNumbers =  oddNumbers.map(x => x * 2);

  console.log(oddNumbers.reverse().join(' '));
}


processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);