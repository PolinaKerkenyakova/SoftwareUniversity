function wordsUpperCase(input) {

    let regex = /[A-Za-z]+/g;

    let foundMatches = input.match(regex);

    let upperCaseMatches = [];

    for (let word of foundMatches) {
        word = word.toUpperCase();
        upperCaseMatches.push(word);
    }

    // foundMatches.forEach(word => {
    //     word = word.toUpperCase();
    //     upperCaseMatches.push(word)
    // });

    console.log(upperCaseMatches.join(', '));
}

wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');