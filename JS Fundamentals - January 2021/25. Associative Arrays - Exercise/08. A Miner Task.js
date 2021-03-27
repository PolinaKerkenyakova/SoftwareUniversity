function minerTask(input) {

    let resources = {};

    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        let amount = Number(input[i + 1]);

        if (resources.hasOwnProperty(resource)) {
            resources[resource] += amount;
        } else {
            resources[resource] = amount;
        }
    }

    for (let line in resources) {
        console.log(`${line} -> ${resources[line]}`)
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
);