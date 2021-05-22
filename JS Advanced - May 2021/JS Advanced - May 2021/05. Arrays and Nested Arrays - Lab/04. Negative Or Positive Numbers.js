function negativeOrPositiveNumbers(inputArray) {

    let modifiedArray = [];
    for (let num of inputArray) {

        if (num < 0) {
            modifiedArray.unshift(num)
        } else {
            modifiedArray.push(num)
        }
    }

    console.log(modifiedArray.join('\n'));
}

negativeOrPositiveNumbers([7, -2, 8, 9]);
negativeOrPositiveNumbers([3, -2, 0, -1]);