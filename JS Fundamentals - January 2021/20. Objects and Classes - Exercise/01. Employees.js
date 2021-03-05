function employees(input) {

    // let employees = {};

    // for (let name of input) {
    //     employees[name] = name.length;
    // }

    // for (const employee in employees) {
    //     console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`)
    // }

    let employees = [];

    for (const name of input) {
        let employee = {
            name: name,
            personalNumber: name.length
        }

        employees.push(employee)
    }

    for (let employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);