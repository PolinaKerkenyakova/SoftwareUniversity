function phoneBook(input) {

    let phoneBook = {};
    for (let person of input) {
        let [name, phone] = person.split(' ');

        phoneBook[name] = phone;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);