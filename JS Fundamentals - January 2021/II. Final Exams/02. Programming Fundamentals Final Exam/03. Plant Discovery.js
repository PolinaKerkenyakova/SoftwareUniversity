function plantDiscovery(input) {

    let plantCount = Number(input.shift());

    let plants = {};
    

    for (let i = 0; i < plantCount; i++) {
        let [plant, rarity] = input.shift().split('<->');

        rarity = Number(rarity);
        plants[plant] = { rarity };
    }

    let commandLine = input.shift();
    while (commandLine !== 'Exhibition') {
        let counter = 0;
        let [command, info] = commandLine.split(': ');
        let [plant, firstArgument] = info.split(' - ');

        if (command === 'Rate') {
            let rating = Number(firstArgument);
            if (plants.hasOwnProperty(plant)) {
                if (plants[plant].rating > 0) {
                    plants[plant].rating += rating;
                } else {
                    plants[plant].rating = rating;
                }

                counter++
                if (plants[plant].counter > 0) {
                    plants[plant].counter += counter;

                } else {
                    plants[plant].counter = counter;
                }

            } else {
                console.log('error')
            }

        } else if (command === 'Update') {
            let rarity = Number(firstArgument)
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = rarity;
            } else {
                console.log('error')
            }
        } else if (command === 'Reset') {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating = 0;
                plants[plant].counter = 0;
            } else {
                console.log('error')
            }
        }

        commandLine = input.shift();
    }

    let plantsEntries = Object.entries(plants);

    plantsEntries.sort((a, b) => {
        if (a[1].rarity === b[1].rarity) {
            let counterA = a[1].counter;
            let counterB = b[1].counter;
            return (b[1].rating / counterA) - (a[1].rating / counterB)
        } else {
            return b[1].rarity - a[1].rarity;
        }
    });

    console.log(`Plants for the exhibition:`)
    for (const kvp of plantsEntries) {
        if (kvp[1].rating === 0) {
            console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${(kvp[1].rating).toFixed(2)}`)
        } else {
            console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${(kvp[1].rating/kvp[1].counter).toFixed(2)}`)
        }
        
    }
}

plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);

// plantDiscovery([
//     '2',
//     'Candelabra<->10',
//     'Oahu<->10',
//     'Rate: Oahu - 7',
//     'Rate: Candelabra - 6',
//     'Exhibition'
// ]);