function inventory(inputArr) {

    let journal = inputArr.shift().split(', ');

    let data = inputArr.shift();
   while (data !== 'Craft!') {
        let [command, item] = data.split(' - ');

        if (command === 'Collect') {
            if (!(journal.includes(item))) {
                journal.push(item);
            }
        } else if (command === 'Drop') {
            if (journal.includes(item)) {
                let itemIndex = journal.indexOf(item);
                journal.splice(itemIndex, 1);
            }
        } else if (command === 'Combine Items') {
            let [oldItem, newItem] = item.split(':')
            if(journal.includes(oldItem)) {
                let itemIndex = journal.indexOf(oldItem);
                journal.splice(itemIndex + 1, 0, newItem);
            }

        } else if (command === 'Renew') {
            if (journal.includes(item)) {
                let itemIndex = journal.indexOf(item);
                journal.splice(itemIndex, 1);
                journal.push(item);
            }
        }

        data = inputArr.shift();
    }

    console.log(journal.join(', '))
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);