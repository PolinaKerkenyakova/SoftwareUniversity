function wordOccurrences(input) {

    let words = new Map();

    for (let word of input) {
        
        if (words.has(word)) {
            let times = words.get(word);
            words.set(word, times+= 1);
        } else {
            words.set(word, 1)
        }
    }

    let sortedWordEntries = Array.from(words.entries());

    sortedWordEntries.sort((a, b) => {
        return b[1] - a[1];
    });

    for (let kvp of sortedWordEntries) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);