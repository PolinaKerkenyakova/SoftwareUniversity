function passwordReset(inputArr) {

    let input = [...inputArr];
    let text = input.shift().trim();

    let command = input.shift();
    while (command !== 'Done') {

        let [operaton, srtOne, strTwo] = command.split(' ');

        if (operaton === 'TakeOdd') {

            let str = '';
            
            for (let i = 0; i < text.length; i++) {
                if (i % 2 !== 0) {
                    str += text[i];
                }
            }
            text = str;
            console.log(text)
        } else if (operaton === 'Cut') {
            let index = Number(srtOne);
            let length = Number(strTwo);

            text = text.split('');
            text.splice(index, length)
            text = text.join('');

            console.log(text)
        } else if (operaton === 'Substitute') {
            let substring = srtOne;
            let replacement = strTwo;

            if (text.indexOf(substring) < 0) {
                console.log('Nothing to replace!');
            }

            let inLoop = false;
            while (text.indexOf(substring) > -1) {
                text = text.replace(substring, replacement);
                inLoop = true;
            }

            if (inLoop) {
                console.log(text)
            }
        }

        command = input.shift();
    }

    console.log(`Your password is: ${text}`)
}

passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);

passwordReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
]);