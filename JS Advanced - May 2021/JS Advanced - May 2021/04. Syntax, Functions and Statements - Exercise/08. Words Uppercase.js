function wordsUpperCase(input) {

    let regex = /[\w]+/g;

    let foundMatches = input.match(regex);

    let upperCaseMatches = [];

    foundMatches.forEach(word => {
            word = word.toUpperCase();
            upperCaseMatches.push(word);
    });

    console.log(upperCaseMatches.join(', '));
}

wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');