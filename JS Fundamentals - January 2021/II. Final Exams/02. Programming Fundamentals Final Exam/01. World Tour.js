function wordTour(inputArr) {
    let input = [...inputArr];
    let stops = input.shift();

    let command = input.shift();


    while (command !== 'Travel') {

        let [operation, strOne, strTwo] = command.split(':');
        if (operation === 'Add Stop') {
            let index = Number(strOne);
            if (index < stops.length && index >= 0) {
                stops = stops.split('');
                stops.splice(index, 0, strTwo);
                stops = stops.join('');
            }
            console.log(stops);

        } else if (operation === 'Remove Stop') {
            let firstIndex = Number(strOne);
            let secondIndex = Number(strTwo);
            let validationOne = firstIndex < stops.length && firstIndex >= 0;
            let validationTwo = secondIndex < stops.length && secondIndex >= 0;

            if (validationOne && validationTwo) {
                stops = stops.split('');
                stops.splice(firstIndex, secondIndex + 1 - firstIndex);

                stops = stops.join('');
            }
            console.log(stops);
        } else if (operation === 'Switch') {

            while (stops.indexOf(strOne) > -1) {
                stops = stops.replace(strOne, strTwo);
            }

            console.log(stops);
        }

        command = input.shift();
    }

    if (command === 'Travel') {
        console.log(`Ready for world tour! Planned stops: ${stops}`);
    }
}

wordTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);