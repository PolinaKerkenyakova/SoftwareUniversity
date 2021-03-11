function replaceRepeatingChars(inputString) {

    let characters = '';

    for (let char of inputString.split('')) {
        let lastChar = characters.slice(-1);

        if (lastChar !== char) {
            characters +=  char;
        }
    }

    console.log(characters);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');