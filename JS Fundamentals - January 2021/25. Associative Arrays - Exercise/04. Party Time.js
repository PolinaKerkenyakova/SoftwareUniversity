function partyTime(input) {

    let guests = new Map();

    let name = input.shift();

    while (name !== 'PARTY') {
        if (/^\d+/.test(name)) {
            guests.set(name, 'vip');
        } else {
            guests.set(name, 'regular');
        }
        name = input.shift()
    }

    for (let line of input) {
        if(guests.has(line)) {
            guests.delete(line);
        }
    }

    let guestList = Array.from(guests.entries());
    let vipGuest = guestList.filter(x => x[1] === 'vip');

    let regularGuests = guestList.filter(x => x[1] === 'regular');

    console.log(vipGuest.length + regularGuests.length);
    vipGuest.forEach(guest => {
        console.log(guest[0]);
    });
    regularGuests.forEach(guest => {
        console.log(guest[0]);
    })
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);