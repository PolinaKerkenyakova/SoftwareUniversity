function theLift(inputArr) {

    let peopleWaiting = Number(inputArr[0]);
    let people = peopleWaiting;
    let wagons = inputArr[1].split(' ').map(Number);

    let allEmptySport = 0;

    for (let seat of wagons) {
        allEmptySport += 4 - seat;
    }

    for (let i = 0; i < wagons.length; i++) {
        if (4 - wagons[i] > 0) {
            let seats = 4 - wagons[i];
            if (peopleWaiting < 4) {
                seats = peopleWaiting;
            }
            wagons[i] += seats;
            peopleWaiting -= seats;
        }
    }


    let areThereEmptySports = false;
    for (let seat of wagons) {
        if (seat < 4) {
            areThereEmptySports = true;
            break;
        }
    }

    if (allEmptySport === people && areThereEmptySports === false) {
        console.log(wagons.join(' '));

    } else if (areThereEmptySports) {
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(' '));

    } else if (peopleWaiting > 0 && areThereEmptySports === false) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(wagons.join(' '))
    }
}

// theLift
//     ([
//         "15",
//         "0 0 0 0 0"
//     ]);
theLift
    ([
        "20",
        "0 2 0"
    ]);