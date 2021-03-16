function race(input) {

    let racers = input.shift().split(', ');
    let raceInfo = {};

    for (let data of input) {

        let nameMatch = data.match(/[A-Za-z]/g);
        let name = nameMatch.join('');

        if (nameMatch && racers.includes(name)) {
            let distanceMatch = data.match(/[\d]/g);

            let distance = calculateDistance(distanceMatch);

            if (!raceInfo[name]) {
                raceInfo[name] = 0;
            }

            raceInfo[name] += distance;
        }
    }

    let topThreeRacers = Object.keys(raceInfo)
    .sort((a, b) => raceInfo[b] - raceInfo[a])
    .slice(0, 3);

    for (let index in topThreeRacers) {
        switch (index) {
            case '0': console.log(`1st place: ${[topThreeRacers[index]]}`); break;
            case '1': console.log(`2nd place: ${[topThreeRacers[index]]}`); break;
            case '2': console.log(`3rd place: ${[topThreeRacers[index]]}`); break;
        }
    }

    function calculateDistance(arr) {
        let totalDistance = 0;
        if (arr === null) { return totalDistance }
        arr.concat([]).forEach((digit) => totalDistance += Number(digit));

        return totalDistance;
    }
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);