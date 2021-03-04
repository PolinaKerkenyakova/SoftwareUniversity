function arrManipulations(input) {

    let numbers = input[0].split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, numberOrIndex, index] = input[i].split(' ');

        numberOrIndex = Number(numberOrIndex);
        index = Number(index);

        if (command === 'Add') {
            numbers.push(numberOrIndex);

        } else if (command === 'Remove') {
           numbers = numbers.filter(num => num !== numberOrIndex);

        } else if (command === 'RemoveAt') {
            numbers.splice(numberOrIndex, 1);

        } else if (command === 'Insert') {
            numbers.splice(index, 0, numberOrIndex)
        }
    }

    console.log(numbers.join(' '));
}

arrManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);