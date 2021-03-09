function adressBook(input) {

    let adressBook = {};

    for (let info of input) {
        let [name, adress] = info.split(':');

        adressBook[name] = adress;
    }

    let sorted = Object.entries(adressBook).sort((a, b) => a[0].localeCompare(b[0]));

    for (let name of sorted) {
        console.log(`${name[0]} -> ${name[1]}`);
    }
}

adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);