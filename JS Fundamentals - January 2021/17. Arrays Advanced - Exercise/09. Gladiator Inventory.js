function gladiatorInventory(input) {

    let data = [...input];

    let inventory = data.shift().split(' ');

    for (let info of data) {
        let [command, equipment] = info.split(' ');

        if (command === 'Buy') {
            if (!(inventory.includes(equipment))) {
                inventory.push(equipment);
            }
        } else if (command === 'Trash') {
            if (inventory.includes(equipment)) {
                let equipmentIndex = inventory.indexOf(equipment);
                inventory.splice(equipmentIndex, 1);
            }
        } else if (command === 'Repair') {
            if (inventory.includes(equipment)) {
                let equipmentIndex = inventory.indexOf(equipment);
                inventory.splice(equipmentIndex, 1);
                inventory.push(equipment);
            }
        } else if (command === 'Upgrade') {
            let [old, upgraded] = equipment.split('-');
            if (inventory.includes(old)) {
                let equipmentIndex = inventory.indexOf(old);
                inventory.splice(equipmentIndex + 1, 0, `${old}:${upgraded}`);
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);
// gladiatorInventory(['SWORD Shield Spear',
// 'Trash Bow',
// 'Repair Shield',
// 'Upgrade Helmet-V']);