function townPopulation(inputArr) {

    let cities = {};

    for (let info of inputArr) {
        let [city, population] = info.split(' <-> ');

        population = Number(population);

        if (cities.hasOwnProperty(city)) {
            cities[city] += population;
        } else {
            cities[city] = population;
        }
    }

    for (let city in cities) {
        console.log(`${city} : ${cities[city]}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);