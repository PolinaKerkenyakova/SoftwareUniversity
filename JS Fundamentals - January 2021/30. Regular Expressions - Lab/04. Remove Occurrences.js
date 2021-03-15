function removeOccurrences(word, text) {

    let pattern = new RegExp(word);

    while (text.match(pattern)) {
        text = text.replace(pattern, '');
    }

    console.log(text);
}

removeOccurrences('ice', 'kicegiciceeb')