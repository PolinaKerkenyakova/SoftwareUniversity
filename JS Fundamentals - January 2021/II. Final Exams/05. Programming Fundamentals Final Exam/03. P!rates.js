function pirates(input) {

    let saleIndex = input.indexOf('Sail');

    let cities = {};

    for (let i = 0; i < saleIndex; i++) {
        let [city, population, gold] = input.shift().split('||');

        population = Number(population);
        gold = Number(gold);
        if (cities.hasOwnProperty(city)) {
            cities[city].population += population;
            cities[city].gold += gold;
        } else {
            cities[city] = { population, gold };
        }
    }

    let commandLine = input.shift();
    while (commandLine !== 'End') {
        let [command, city, firstArgument, secondArgument] = commandLine.split('=>');

        if (command === 'Plunder') {
            let population = Number(firstArgument);
            let gold = Number(secondArgument);
            cities[city].population -= population;
            cities[city].gold -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            if (cities[city].population === 0 || cities[city].gold === 0) {
                console.log(`${city} has been wiped off the map!`)
                delete cities[city];
            }
        } else if (command === 'Prosper') {
            let gold = Number(firstArgument);

            if (gold < 0) {
                console.log('Gold added cannot be a negative number!')
            } else {
                cities[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`)
            }
        }

        commandLine = input.shift();
    }

    let sorted = Object.entries(cities).sort((a, b) => {
        if (a[1].gold === b[1].gold) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].gold - a[1].gold;
        }
    });

    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`)
    }
}

pirates([
    'Tortuga||345000||1250',
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]);

pirates([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
]);