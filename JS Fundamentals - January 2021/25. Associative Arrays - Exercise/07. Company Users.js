function companyUsers(input) {

    let companies = new Map();

    for (let line of input) {
        let [company, employee] = line.split(' -> ');

        if (companies.has(company)) {
            let employees = companies.get(company);
            companies.set(company, employees.concat(employee));
        } else {
            
            companies.set(company, [employee]);
        }
    }

    let information = Array.from(companies.entries());
    information.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })

    for (let kvp of information) {
        console.log(kvp[0]);

        let employees = new Set(kvp[1]);

        for (let name of employees) {
            console.log(`-- ${name}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);