function hearthDelivery(inputArr) {

    let neighborhood = inputArr.shift().split('@').map(Number);

    let command = inputArr.shift();

    let index = 0;
    while (command !== 'Love!') {

        let [jump, length] = command.split(' ');

        length = Number(length);

        if (index + length >= neighborhood.length) {
            index = 0;
        } else {
            index += length;
        }


        if (neighborhood[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`)
        }

        if (neighborhood[index] > 0) {
            neighborhood[index] -= 2

            if (neighborhood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`)
            }
        }

        command = inputArr.shift();
    }

    console.log(`Cupid's last position was ${index}.`);

    let isFailed = false;
    let failedHouses = 0;

    for (let house of neighborhood) {
        if (house !== 0) {
            isFailed = true;
            failedHouses++;
        }
    }

    if (isFailed) {
        console.log(`Cupid has failed ${failedHouses} places.`)
    } else {
        console.log(`Mission was successful.`)
    }
}

hearthDelivery
    (['10@10@10@2',
        'Jump 1',
        'Jump 2',
        'Love!'
    ]);

hearthDelivery
    ([
        '2@4@2', 'Jump 2',
        'Jump 2', 'Jump 8',
        'Jump 3', 'Jump 1',
        'Love!'
    ]);

