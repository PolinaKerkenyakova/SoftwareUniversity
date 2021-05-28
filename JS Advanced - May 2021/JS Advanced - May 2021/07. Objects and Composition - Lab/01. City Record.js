function cityRecord(name, population, treasury) {

    let city = {
        name,
        population: Number(population),
        treasury: Number(treasury)
    }

    return city;
}

cityRecord('Tortuga',
7000,
15000);

cityRecord('Santo Domingo',
12000,
23500);