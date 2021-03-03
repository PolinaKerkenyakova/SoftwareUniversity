function printElement(array) {

    let step = Number(array.pop());
    let numbers = [];

    for (let i = 0; i < array.length; i += step) {
        numbers.push(array[i]);
    }

    console.log(numbers.join(' '));
}

printElement(['5', '20', '31', '4', '20', '2']);
printElement(['dsa', 'asd', 'test', 'test', '2']
);
printElement(['1', '2', '3', '4', '5', '6']);