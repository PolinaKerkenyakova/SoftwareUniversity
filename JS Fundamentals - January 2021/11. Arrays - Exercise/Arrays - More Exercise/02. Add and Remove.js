function addOrRemove(commands) {

    let numbersArr = [];
    
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            numbersArr.push(i + 1);
        } else if (commands[i] === 'remove') {
            numbersArr.pop();
        }
    }

    if (numbersArr.length === 0) {
        console.log('Empty')
    } else {
        console.log(numbersArr.join(' '));
    }
}

addOrRemove(['add', 'add', 'add', 'add']);
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
addOrRemove(['remove', 'remove', 'remove']);