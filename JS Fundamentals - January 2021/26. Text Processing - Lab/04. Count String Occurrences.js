function countStringOccurrences(text, string) {

    let sentance = text.split(' ');

    let counter = 0;
    for (let word of sentance) {
        if (string === word) {
            counter++;
        }
    }

    console.log(counter)
}

countStringOccurrences("This is a word and it also is a sentence", "is");