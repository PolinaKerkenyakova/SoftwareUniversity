function carFactory(inputObj) {
    const {
        model,
        power,
        color,
        carriage,
        wheelsize
    } = inputObj;


    let car = {
        model,
        engine: getEngine(power),
        carriage: getCarriage(carriage, color),
        wheels: getWheelSize(wheelsize)
    }

    

    function getEngine(power) {
        let engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ].sort((a, b) => a.power - b.power);

        let result = engines.find(engine => engine.power >= power);

        return result;
    }

    function getCarriage(carriage, color) {

        let result =  {
        type: carriage,
        color
        }

        return result;
    }

    function getWheelSize(wheelSize) {
        
        let size =  Math.floor(wheelSize) % 2 === 0
        ? Math.floor(wheelSize) - 1
        : Math.floor(wheelSize);

        return Array(4).fill(size, 0, 4);
    }

    return car;
}

console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log(carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));