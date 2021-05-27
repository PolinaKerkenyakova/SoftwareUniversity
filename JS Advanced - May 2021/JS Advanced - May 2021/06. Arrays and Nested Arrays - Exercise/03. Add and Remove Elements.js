function addAndRemeveElements(inputArr) {

    let result = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === 'add') {
            result.push(i + 1)
        } else if (inputArr[i] === 'remove') {
            if (result.length > 0) {
                result.pop();
            }
        }
    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

addAndRemeveElements([
    'add',
    'add',
    'add',
    'add'
]);

addAndRemeveElements([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);

addAndRemeveElements([
    'remove',
    'remove',
    'remove'
]);