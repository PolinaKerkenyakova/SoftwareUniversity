function houseParty(input) {

    let list = [];
    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(' ');
        let name = info[0];

        if (info.includes('not')) {
            if (list.includes(name)) {
                list.splice(i, 1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        } else {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                list.push(name);
            }
        }
    }

    console.log(list.join('\n'))
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);   
// Expected output:
// John is not in the list!
// Allie
// houseParty(['Tom is going!',
// 'Annie is going!',
// 'Tom is going!',
// 'Garry is going!',
// 'Jerry is going!']);
// Expected output:
// Tom is already in the list!
// Tom
// Annie
// Garry
// Jerry
