function addOrRemove(commands) {

    let numberArray = [];
    let isEmpty = false;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            numberArray.push(i + 1);
        } else if (commands[i] === 'remove'){
            if (numberArray.length < 1) {
                isEmpty = true;
                break;
            } else {
                numberArray.pop();
            }
        }
    }

    if (isEmpty) {
        console.log('Empty');
    } else {
        console.log(numberArray.join(' '));
    }
}


addOrRemove(['add', 'add', 'add', 'add']);
addOrRemove(['add', 'add', 'remove', 'add', 'add']
);
addOrRemove(['remove', 'remove', 'remove']
);