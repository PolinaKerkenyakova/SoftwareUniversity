function rotateArray(inputArr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let element = inputArr.pop();
        inputArr.unshift(element);
    }

    console.log(inputArr.join(' '));
}

rotateArray([
    '1',
    '2',
    '3',
    '4'
],
    2);

rotateArray([
    'Banana',
    'Orange',
    'Coconut',
    'Apple'
],
    15);