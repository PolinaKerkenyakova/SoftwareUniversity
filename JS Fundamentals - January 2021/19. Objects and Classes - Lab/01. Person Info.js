function personInfo(firstName, lastName, age) {

    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }

}

personInfo("Peter", "Pan", "20");