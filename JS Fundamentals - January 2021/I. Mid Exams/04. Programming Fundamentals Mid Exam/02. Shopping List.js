function shoppingList(inputArr) {

    let groceries = inputArr.shift().split('!');
    let isOver = false;

    for (let i = 0; i < inputArr.length; i++) {

        if (inputArr[i] === 'Go Shopping!') {
            isOver = true;
            break;
        }

        let [command, item, newItem] = inputArr[i].split(' ');

        if (command === 'Urgent') {
            if (!(groceries.includes(item))) {
                groceries.unshift(item);
            }

        } else if (command === 'Unnecessary') {
            if (groceries.includes(item)) {
                let itemIndex = groceries.indexOf(item);
                groceries.splice(itemIndex, 1);
            }

        } else if (command === 'Correct') {
            if (groceries.includes(item)) {
                let itemIndex = groceries.indexOf(item);
                groceries.splice(itemIndex, 1, newItem);
            }

        } else if (command === 'Rearrange') {
            if (groceries.includes(item)) {
                let itemIndex = groceries.indexOf(item);
                groceries.splice(itemIndex, 1);
                groceries.push(item)
            }

        }
    }

    if (isOver) {
        console.log(groceries.join(', '));
    }
}

shoppingList
    ([
        'Tomatoes!Potatoes!Bread',
        'Unnecessary Milk',
        'Urgent Tomatoes',
        'Go Shopping!'
    ]);

shoppingList
    ([
        'Milk!Pepper!Salt!Water!Banana',
        'Urgent Salt',
        'Unnecessary Grapes ',
        'Correct Pepper Onion',
        'Rearrange Grapes',
        'Correct Tomatoes Potatoes',
        'Go Shopping!'
    ]);