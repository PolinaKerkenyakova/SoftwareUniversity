function activationKeys(inputArr) {

    let input = [...inputArr];
    
    let key = input.shift();
    // let rawActivationKey = key;

    let command = input.shift();

    while (command !== 'Generate') {

        let [operation, strOne, strTwo, strThree] = command.split('>>>')

        if (operation === 'Contains') {

            let str = strOne;

            if (key.indexOf(str) > -1) {
                console.log(`${key} contains ${srt}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (operation === 'Flip') {
            let letterCase = strOne;
            let startIndex = Number(strTwo);
            let endIndex = Number(strThree);

            key = key.split('');
            for (let i = startIndex; i < endIndex; i++) {
                if (letterCase === 'Upper') {
                    key[i] = key[i].toUpperCase();
                } else if (letterCase === 'Lower') {
                    key[i] = key[i].toLowerCase();
                }
            }

            key = key.join('');
            console.log(key);
        } else if (operation === 'Slice') {
            let startIndex = Number(strOne);
            let endIndex = Number(strTwo);

            key = key.split('');
            key.splice(startIndex, endIndex - startIndex);
            key = key.join('');
            console.log(key);
        }
        command = input.shift();
    }

    console.log(`Your activation key is: ${key}`);
}

// activationKeys([
//     'abcdefghijklmnopqrstuvwxyz',
//     'Slice>>>2>>>6',
//     'Flip>>>Upper>>>3>>>14',
//     'Flip>>>Lower>>>5>>>7',
//     'Contains>>>def',
//     'Contains>>>deF',
//     'Generate'
//   ]);

  activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]);