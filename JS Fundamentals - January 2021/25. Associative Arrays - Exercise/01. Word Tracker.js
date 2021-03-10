function wordTracker(input) {

    let strings = input.shift().split(' ');

    let words = new Map();

    for (let word of strings) {
        words.set(word, 0);
    }

    for (let word of input) {
        if (words.has(word)) {
            let currentCount = words.get(word);
            words.set(word, currentCount += 1);
        }
    }

    let sortedByDescending = Array.from(words.entries());

    sortedByDescending.sort((a, b) => {
        return b[1] - a[1];
    });

    for (let kvp of sortedByDescending) {
        console.log(`${kvp[0]} - ${kvp[1]}`)
    }
}

wordTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);