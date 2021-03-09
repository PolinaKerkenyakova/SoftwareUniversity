function neighborhoods(input) {

    let neighborhoods = input.shift().split(', ');

    let area = new Map();
    for (let neighborhood of neighborhoods) {
        area.set(neighborhood, []);
    }

    for (let i = 0; i < input.length; i++) {
        let [neighborhood, person] = input[i].split(' - ');
        if (neighborhoods.includes(neighborhood)) {
        area.get(neighborhood).push(person);
        }
    }

    let sortedByCount = Array.from(area.entries());

    sortedByCount.sort((a, b) => {
        return b[1].length - a[1].length;
    });

    for (let kvp of sortedByCount) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);

        for (let person of kvp[1]) {
            console.log(`--${person}`);
        }
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);