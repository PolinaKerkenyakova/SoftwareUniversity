function sorting(input) {

    let modifiedArr = [];

    let numbers = [...input]

    numbers = numbers.sort((a, b) => {
        return b - a;
    });

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            modifiedArr[i] = numbers.shift();
        } else {
            modifiedArr[i] = numbers.pop();
        }
    }

    console.log(modifiedArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);