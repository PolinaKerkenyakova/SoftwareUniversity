function sortNumbers(firstNum, secondNum, thirdNum) {
    let numbers = [];
    numbers.push(firstNum, secondNum, thirdNum);

    numbers.sort((a, b) => {
        return (b - a);
    });

    console.log(numbers.join('\n'));
}

sortNumbers(2, 1, 3);
