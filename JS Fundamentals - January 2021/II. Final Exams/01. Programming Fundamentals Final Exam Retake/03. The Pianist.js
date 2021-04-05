function thePianist(input) {

    let piecesCount = Number(input.shift());
    let pieces = {}

    for (let i = 0; i < piecesCount; i++) {
        let [piece, composer, key] = input.shift().split('|');

        pieces[piece] = { composer, key };
    }

    let commandLine = input.shift();

    while (commandLine !== 'Stop') {
        let [command, pieceName, firstArgument, secondArgument] = commandLine.split('|');

        if (command === 'Add') {
            if (pieces.hasOwnProperty(pieceName)) {
                console.log(`${pieceName} is already in the collection!`);
            } else {
                let composer = firstArgument;
                let key = secondArgument;
                pieces[pieceName] = { composer, key };
                console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (pieces.hasOwnProperty(pieceName)) {
                delete pieces[pieceName];
                console.log(`Successfully removed ${pieceName}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {
            if (pieces.hasOwnProperty(pieceName)) {
                pieces[pieceName].key = firstArgument;
                console.log(`Changed the key of ${pieceName} to ${firstArgument}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }

        commandLine = input.shift();
    }

    let piecesCollectionEntries = Object.entries(pieces);

    piecesCollectionEntries.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0].localeCompare(b[0]);
        } else {
            return (a[1].composer).localeCompare(b[1].composer);
        }
    });

    for (const kvp of piecesCollectionEntries) {
        console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`)
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);