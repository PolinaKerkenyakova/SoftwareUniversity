function stringSubstring(word, text) {

    let originalWord = word;
    word = word.toLowerCase();
    text = text.toLowerCase();

    if (text.split(' ').includes(word)) {
        console.log(originalWord);
    } else {
        console.log(`${originalWord} not found!`)
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language');
stringSubstring('python',
'JavaScript is the best programming language');
stringSubstring('javascript', 'JavaScript is the best programming language');