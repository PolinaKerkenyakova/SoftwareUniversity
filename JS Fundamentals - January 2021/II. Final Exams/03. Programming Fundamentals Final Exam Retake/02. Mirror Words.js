function mirrorWords(inputArr) {

    let text = inputArr[0];
    let regex = /([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let pairs = [];
    let wordPairsCount = 0;
    let isPairValid = false;


    while ((valid = regex.exec(text)) !== null) {
        let wordOne = valid.groups['wordOne'];
        let wordTwo = valid.groups['wordTwo'];
        wordPairsCount++

        let reversedWordTwo = wordTwo.split('').reverse().join('');

        if (wordOne === reversedWordTwo) {
            isPairValid = true;
            let pair = [wordOne, wordTwo];
            pairs.push(pair);
        }
    }

    let output = [];
    pairs.forEach(pair => {
        output.push(`${pair[0]} <=> ${pair[1]}`);
    })

    if (wordPairsCount > 0) {
        console.log(`${wordPairsCount} word pairs found!`)
    }

    if (wordPairsCount > 0 && pairs.length === 0) {
        console.log(`No mirror words!`);
    }

    if (pairs.length === 0 && wordPairsCount === 0) {
        console.log(`No word pairs found!`)
        console.log(`No mirror words!`);

    }

    if (wordPairsCount > 0 && isPairValid) {
        console.log(`The mirror words are:\n${output.join(', ')}`)
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

mirrorWords([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]);

mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
]);