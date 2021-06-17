function playingCards(face, suit) {

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

    if (!(cards.faces.includes(face)) || !(cards.suits.includes(suit))) {
        throw new Error('Error');
    }

    return `${face}${suitIcons[suit]}`;
}

console.log(playingCards('A', 'S'));
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C'));