function houseParty(input) {

    let list = [];
    for (let guest of input) {
        let [name, ...going] = guest.split(' ');

        if (!(going.includes('not'))) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                list.push(name);
            }
        } else if (going.includes('not')) {
            if (!(list.includes(name))) {
                console.log(`${name} is not in the list!`)
            } else {
                let nameIndex = list.indexOf(name);
                list.splice(nameIndex, 1);
            }
        }
    }

    console.log(list.join('\n'));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);
