class Company {
    constructor() {
        this.departmenets = {};
    }

    addEmployee(username, salary, position, department) {

        let isDataValid = true;
        if (!username || !position || !department || !salary || salary < 0) {
            isDataValid = false;
            throw new Error('Invalid input!')
        }

        if (isDataValid) {
            if (!this.departmenets.hasOwnProperty(department)) {
                this.departmenets[department] = [];
            }

            this.departmenets[department].push({ username, salary, position });


            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }

    bestDepartment() {

    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());