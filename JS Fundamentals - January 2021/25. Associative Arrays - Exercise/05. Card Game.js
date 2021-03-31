function cardGame(input) {

    let type = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let power = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    let players = {};
    let playersFinalPoints = {};

    for (let line of input) {
        let [playerName, playerCards] = line.split(': ');
        let cards = playerCards.split(', ');

        if (!players.hasOwnProperty(playerName)) {
            players[playerName] = cards.toString();
        } else {
            let currentValue = cards + ',' + players[playerName];
            players[playerName] = currentValue;
        }
    }

    for (let player in players) {
        let sum = 0;
        let name = player;
        let cards = players[player].split(', ');

        let cardsSet = new Set(cards);
        let cardsArray = Array.from(cardsSet);

        for (let card of cardsArray) {
            if (card.length === 2) {
                let [cardType, cardPower] = card.split('');
                sum += Number(power[cardPower]) * Number(type[cardType]);
            } else {
                let [cardType, other, cardPower] = card.split('');
                cardType = cardType + other;
                sum += Number(power[cardPower]) * Number(type[cardType]);
            }


            if (!playersFinalPoints.hasOwnProperty(name)) {
                playersFinalPoints[name] = sum;
            } else {
                let currentSum = playersFinalPoints[name] + sum;
                playersFinalPoints[name] = currentSum;
            }
        }
    }

    for (const line in playersFinalPoints) {
    console.log(`${line}: ${playersFinalPoints[line]}`);
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);






// function cardGames(input) {

//     let type = {
//         '2': 2,
//         '3': 3,
//         '4': 4,
//         '5': 5,
//         '6': 6,
//         '7': 7,
//         '8': 8,
//         '9': 9,
//         '10': 10,
//         'J': 11,
//         'Q': 12,
//         'K': 13,
//         'A': 14
//     };
//     let power = {
//         'S': 4,
//         'H': 3,
//         'D': 2,
//         'C': 1
//     };

//     let final = {};
//     let people = {};

//     for (const elem of input) {

//         let [namePlayer, gameCards] = elem.split(': ');
//         let cards = gameCards.split(', ');
//         if (!people.hasOwnProperty(namePlayer)) {
//             people[namePlayer] = cards.toString();
//         } else {
//             let currentValue = cards + ',' + people[namePlayer];
//             people[namePlayer] = currentValue;
//         }
//     }

//     for (let elem in people) {

//         let sum = 0;
//         let name = elem;
//         let card = people[elem].split(',');
//         let set = new Set(card);
//         let cardArray = Array.from(set);

//         for (let card of cardArray) {
//             if (card.length === 2) {
//                 let [typeCard, powerCard] = card.split('');
//                 sum += Number(type[typeCard]) * Number(power[powerCard]);
//             } else {
//                 let [typeCard, other, powerCard] = card.split('');
//                 typeCard = typeCard + other;
//                 sum += Number(type[typeCard]) * Number(power[powerCard]);
//             }
//         }

//         if (!final.hasOwnProperty(name)) {
//             final[name] = sum;
//         } else {
//             let currentSum = final[name] + sum;
//             final[name] = currentSum;
//         }
//     }

//     for (const row in final) {
//         console.log(`${row}: ${final[row]}`);

//     }
// }

// cardGames([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]);