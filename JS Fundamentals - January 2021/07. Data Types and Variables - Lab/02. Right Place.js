function rightPlace(stringWithoutChar, char, string) {

    let replacedWord = '';

    for (let i = 0; i < stringWithoutChar.length; i++) {
        if (stringWithoutChar[i] === '_') {
            replacedWord += char;
        } else {
            replacedWord += stringWithoutChar[i];
        }
    }

    if (replacedWord === string) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');