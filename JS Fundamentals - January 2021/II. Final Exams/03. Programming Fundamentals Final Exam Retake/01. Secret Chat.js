function secretChar(inputArr) {

    let input = [...inputArr];
    let message = input.shift();

    let command = input.shift();

    while (command !== 'Reveal') {

        let [operation, substrOrIndex, replacement] = command.split(':|:');

        if (operation === 'InsertSpace') {
            message = message.split('');
            message.splice(substrOrIndex, 0, ' ');
            message = message.join('');

            console.log(message);

        } else if (operation === 'Reverse') {
            if (message.indexOf(substrOrIndex) > -1) {

                message = message.replace(substrOrIndex, '');
                substrOrIndex = substrOrIndex.split('').reverse().join('');
                message += substrOrIndex;
                console.log(message);
            } else {
                console.log('error');
            }

        } else if (operation === 'ChangeAll') {

            while (message.indexOf(substrOrIndex) > -1) {
                message = message.replace(substrOrIndex, replacement)
            }

            console.log(message);
        }

        command = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

secretChar([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

secretChar([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);