function modernTimes(sentance) {

    let output = [];

    let words = sentance.split(' ');

    for (let word of words) {
        if (word.length > 1 && word.startsWith('#')) {
            word = word.substring(1);
            output.push(word);
        }
    }

    output = output.filter((word) => word.split('').every((x) => isLower(x) || isUpper(x)));


    function isLower(char) {
        let asciiValue = char.charCodeAt(0);
        return asciiValue >= 97 && asciiValue <= 122;
    }

    function isUpper(char) {
        let asciiValue = char.charCodeAt(0);
        return asciiValue >= 65 && asciiValue <= 90;
    }

    console.log(output.join('\n')) 
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');