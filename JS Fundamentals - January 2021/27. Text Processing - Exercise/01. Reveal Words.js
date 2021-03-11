function revealWords(string, text) {

    let words = string.split(', ');

    words.forEach((word) => {

        let asterix = '*'.repeat(word.length);
        text = text.replace(asterix, word)
    });

    console.log(text);
}

revealWords('great',
    'softuni is ***** place for learning new programming languages');
// revealWords('great, learning',
// 'softuni is ***** place for ******** new programming languages');