function imitationGame(inputArr) {

    let input = [...inputArr];
    let message = input.shift();

    let command = input.shift();

    while (command !== 'Decode') {
        let [operation, strOne, strTwo] = command.split('|');

        if (operation === 'Move') {
            let numberOfLetters = Number(strOne);
            let letters = message.substring(0, numberOfLetters);
            message = message.replace(letters, '');
            message += letters;
        } else if (operation === 'Insert') {
            let index = Number(strOne);
            let value = strTwo;

            message = message.split('');
            message.splice(index, 0, value);
            message = message.join('');
        } else if (operation === 'ChangeAll') {
            
            while (message.indexOf(strOne) > -1) {
                message = message.replace(strOne, strTwo);
            }
        }

        command = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

// imitationGame([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'
//   ]);

  imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);