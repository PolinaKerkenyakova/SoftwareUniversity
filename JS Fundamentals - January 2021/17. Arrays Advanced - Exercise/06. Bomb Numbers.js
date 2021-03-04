function bombNumbers(numbers, bombWithPower) {

    let bomb = bombWithPower[0];
    let power = bombWithPower[1]


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === bomb) {
            numbers.splice(numbers[i - power], Math.min((power * 2 + 1), numbers.length));
        }
    }

    let sum = 0;

    for (let num of numbers) {
        
        sum += num
    }

    console.log(sum)
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);