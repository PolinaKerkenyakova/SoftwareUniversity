function heroicInventory(inputArr) {

    let output = [];

    inputArr.forEach(x => {
        let [name, level, items] = x.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];

        output.push({ name, level, items })
    });

    return JSON.stringify(output);
}

console.log(heroicInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
));

console.log(heroicInventory(
    ['Jake / 1000 / Gauss, HolidayGrenade']
));