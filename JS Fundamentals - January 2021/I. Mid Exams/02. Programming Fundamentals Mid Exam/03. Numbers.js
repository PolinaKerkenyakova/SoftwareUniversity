function numbers(inputStr) {

    let numbers = inputStr.split(' ').map(Number);

    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    let averageNumber = sum / numbers.length;

    let biggerThanAverage = numbers.filter(num => num > averageNumber);

    let sortedInDescendingOrder = biggerThanAverage.sort((a, b) => {
        return b -a;
    }).slice(0, 5);


    numbers.filter(x => x !== x);
    if (numbers.length < 5) {
        console.log('No');
    } else if (sortedInDescendingOrder.length < 1) {
        console.log('No');
    } else {
        console.log(sortedInDescendingOrder. join(' '));
    }
}

numbers('1 1 1 1 1 1')
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');