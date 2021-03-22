function arrayModifier(inputArr) {


    let numbers = inputArr.shift().split(' ').map(Number);

    for(let i = 0; i < inputArr.length; i++) {
        let [command, indexOne, indexTwo] = inputArr[i].split(' ');

        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo);

        if (command === 'swap') {
           let numOnINdexOne = numbers[indexOne];
           let numOnIndexTwo = numbers[indexTwo];
        
           numbers[indexOne] = numOnIndexTwo;
           numbers[indexTwo] = numOnINdexOne;

        } else if (command === 'multiply') {
            let num = numbers[indexOne] * numbers[indexTwo];
            numbers.splice(indexOne, 1, num);

        } else if (command === 'decrease') {
            numbers = numbers.map(x => x - 1);
        } else if (command === 'end') {
            console.log(numbers.join(', '));
            break;
        }
    }
}

arrayModifier
([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
  arrayModifier
  ([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);