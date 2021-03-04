function numberSearch(integers, commands) {

    let removeFromBeggining = commands[0];
    let numbersToBeDeleted = commands[1];
    let numberSearch = commands[2];

    let takenNumbers = integers.slice(0, removeFromBeggining);

    takenNumbers.slice(0, takenNumbers.length - numbersToBeDeleted)

    let occuringTimes = 0;

    for (let num of takenNumbers) {
        if (num === numberSearch) {
            occuringTimes++;
        }
    }

    console.log(`Number ${numberSearch} occurs ${occuringTimes} times.`)
}

numberSearch([5, 2, 3, 4, 1, 6],
    [5, 2, 3])