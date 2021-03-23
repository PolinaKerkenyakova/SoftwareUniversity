function counterStrike(inputArr) {

    let wonBattles = 0;
    let energy = Number(inputArr.shift());

    let distance = inputArr.shift();

    while (distance !== 'End of battle') {
        distance = Number(distance);

        if (energy >= distance) {
            energy -= distance;
            wonBattles++;
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;
        }

        if (wonBattles % 3 === 0) {
            energy += wonBattles;
        }

        distance = inputArr.shift();
    }

    if (distance === 'End of battle') {
        console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`)
    }
}

counterStrike([
    '100', '10', '10',
    '10', '1', '2',
    '3', '73', '10'
]);

counterStrike([
    '200', '54', '14',
    '28', '13',
    'End of battle'
]);