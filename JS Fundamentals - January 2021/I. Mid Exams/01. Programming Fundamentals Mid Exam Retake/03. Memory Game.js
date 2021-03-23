function memoryGame(inputArr) {

    let moves = 0;
    let elements = inputArr.shift().split(' ');
    for (let i = 0; i < inputArr.length; i++) {
        
        if (inputArr[i] === 'end') {

            if (elements.length > 0) {
                console.log(`Sorry you lose :(`);
                console.log(`${elements.join(' ')}`);
            }

            break;
        }
        moves++

        let [indexOne, indexTwo] = inputArr[i].split(' ');
        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo)

        let oneInBound = indexOne > -1 && indexOne < elements.length;
        let twoInBound = indexTwo > -1 && indexTwo < elements.length;
        if (indexOne !== indexTwo && oneInBound && twoInBound) {
            if (elements[indexOne] === elements[indexTwo]) {
                console.log(`Congrats! You have found matching elements - ${elements[indexOne]}!`)
                if (indexOne < indexTwo) {
                    elements.splice(indexTwo, 1);
                    elements.splice(indexOne, 1);
                } else {
                    elements.splice(indexOne, 1);
                    elements.splice(indexTwo, 1);
                }
               
            } else {
                console.log('Try again!');
            }

        } else {
            console.log(`Invalid input! Adding additional elements to the board`)
            elements.splice(elements.length / 2, 0, `-${moves}a`, `-${moves}a`)
        }

        if (elements.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
    }
}
// memoryGame([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ]);

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);

// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ]);