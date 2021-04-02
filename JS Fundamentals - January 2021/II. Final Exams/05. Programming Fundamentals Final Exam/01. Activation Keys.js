function activationKeys(inputArr) {
    let input = [...inputArr];

    let key = input.shift();

    let line = input.shift();
    while (line !== 'Generate') {

        let info = line.split('>>>');

        let command = info[0];
        if (command === 'Contains') {
            let substring = info[1];
            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`)
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command === 'Flip') {
            let letterCase = info[1];
            let startIndex = Number(info[2]);
            let endIndex = Number(info[3]);

            let subStr = key.substring(startIndex, endIndex);
            let flippedSubStr = '';

            if (letterCase === 'Upper') {
                flippedSubStr = subStr.toUpperCase();
            } else {
                flippedSubStr = subStr.toLowerCase();
            }

            key = key.replace(subStr, flippedSubStr);
            console.log(key);
        } else if (command === 'Slice') {
            let startIndex = Number(info[1]);
            let endIndex = Number(info[2]);

            let subStr = key.substring(startIndex, endIndex);

            key = key.replace(subStr, '');
            console.log(key)
        }

        line = input.shift();
    }

    console.log(`Your activation key is: ${key}`)
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