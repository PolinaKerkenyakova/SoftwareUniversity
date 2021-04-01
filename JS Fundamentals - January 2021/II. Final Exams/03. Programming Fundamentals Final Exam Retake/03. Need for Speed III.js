function needForSpeed(inputArr) {

    let input = [...inputArr]
    let carsCount = input.shift();
    let cars = [];

    for (let i = 0; i < carsCount; i++) {
        let [carName, kms, carFuel] = input[i].split('|');

        let car = {
            name: carName,
            mileage: Number(kms),
            fuel: Number(carFuel)
        }

        cars.push(car);
    }

    let command = input.shift();

    while (command !== 'Stop') {
        let [operation, carBrand, tempOne, tempTwo] = command.split(' : ');

        if (operation === 'Drive') {
            let distance = Number(tempOne);
            let fuel = Number(tempTwo);

        }

        command = input.shift();
    }


}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);