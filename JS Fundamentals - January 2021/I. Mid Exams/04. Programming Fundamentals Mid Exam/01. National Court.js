function nationalCourt(inputArr) {

    let input = inputArr.map(Number);

    let firstEmployee = input[0];
    let secondEmployee = input[1];
    let thirdEmployee = input[2];
    let peopleWaiting = input[3];

    let helpedPeoplePerHour = firstEmployee + secondEmployee + thirdEmployee;

    let hours = 0;
    while (peopleWaiting > 0) {
        hours++;

        if (!(hours % 4 === 0)) {
            peopleWaiting -= helpedPeoplePerHour;
        }
    }

    console.log(`Time needed: ${hours}h.`)
}

nationalCourt(['5', '6', '4', '20']);
nationalCourt(['1', '2', '3', '45']);
nationalCourt(['3', '2', '5', '40']);