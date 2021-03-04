function train(arr) {

    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let [addOrPassengers, passengers] = arr[i].split(' ');

        if (addOrPassengers === 'Add') {
            wagons.push(Number(passengers));
        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + Number(addOrPassengers) <= maxCapacity) {
                    wagons[j] += Number(addOrPassengers);
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '))
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);     // Expected output: 72 54 21 12 4 75 23 10 0
// train(['0 0 0 10 2 4',
// '10',
// 'Add 10',
// '10',
// '10',
// '10',
// '8',
// '6']);   // Expected output: 10 10 10 10 10 10 10