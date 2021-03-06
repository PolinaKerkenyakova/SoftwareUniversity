function deckOfCards(inputArr) {

    let cards = {
        faces: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        suits: ['S', 'H', 'D', 'C'],
    }

    let suitIcons = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    let result = [];
    let isCardInvalid = false;
    let currentCard = '';

    inputArr.forEach(card => {
        let face = card.slice(0, card.length - 1);
        let suit = card.slice(card.length - 1);

        if (cards.faces.includes(face) && cards.suits.includes(suit)) {
            result.push(`${face}${suitIcons[suit]}`)
        } else {
            isCardInvalid = true;
            currentCard = card;
        }
    });

    if (isCardInvalid) {
        console.log(`Invalid card: ${currentCard}`);
    } else {
        console.log(result.join(' '));
    }
}


deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);

