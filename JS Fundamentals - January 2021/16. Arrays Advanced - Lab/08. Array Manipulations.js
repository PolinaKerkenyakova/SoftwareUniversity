function arrManipulations(commands) {

    let arr = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {
        let token = commands[i].split(' ');
        let command = token[0];
        let number = Number(token[1]);
        let index = Number(token[2]);

        if (command === 'Add') {
            arr.push(number)
        } else if (command === 'Remove') {
            let indx = arr.indexOf(number);
            arr.splice(indx, 1);
        } else if (command === 'RemoveAt') {
            arr.splice(number, 1);
        } else if (command === 'Insert') {
            arr.splice(index, 0, number);
        }
    }

    console.log(arr.join(' '))
}

arrManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);