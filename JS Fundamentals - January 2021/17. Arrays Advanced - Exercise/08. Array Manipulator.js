function arrayManipulation(numbers, commandss) {

    let commands = commandss.split('')
    let command = commands[0];
    let index;
    let element;
    let position;

    for (let i = 0; i < numbers.length; i++) {
        if (command === 'add') {
            index = commands[1];
            element = commands[2];

            numbers.splice(index, 0, element);
        } else if (command === 'addMany') {
            index = commands[1];
            elements = commands.slice(2).split(' ')

            numbers.splice(index, 0, elements)
        } else if (command === 'contains') {
            element = commands[1];
            if (numbers.includes(element)) {
                console.log(i)
            } else {
                console.log(-1);
            }
        } else if (command === 'remove') {
            index = commands[1];
            numbers.splice(index, 1);
        } else if (command === 'shift') {
            position = commands[1];

            for (let i = 0; i < position; i++) {
                let shiftedNum = numbers.pop();
                numbers.unshift(shiftedNum);
            }
        } else if (command === 'sumPairs') {
            let temp = [];

            for (let i = 0; i < numbers.length; i++) {
                let sumed = numbers[i] + numbers[i+1]
                i = i + 1
                temp.push(sumed)
            }

            numbers = temp;
        } else if (command === 'print') {
            console.log(numbers);
            break;
        }
    }

}

arrayManipulation([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulation([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);