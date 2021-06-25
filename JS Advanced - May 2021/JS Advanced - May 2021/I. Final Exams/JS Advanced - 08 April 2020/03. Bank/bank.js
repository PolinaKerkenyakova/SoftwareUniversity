class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer({ firstName, lastName, personalId }) {
        let isCustomerAlready = this.allCustomers.find(x => x.personalId === personalId);

        if (isCustomerAlready) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }

        this.allCustomers.push({ firstName, lastName, personalId });
        return { firstName, lastName, personalId };
    }

    depositMoney(personalId, amount) {
        let person = this.allCustomers.find(x => x.personalId === personalId);

        if (!person) {
            throw new Error('We have no customer with this ID!');
        }

        if (!person.totalMoney) {
            person.totalMoney = 0;
        }

        if (!person.transactions) {
            person.transactions = [];
        }

        person.totalMoney += amount;
        person.transactions.push(`${person.firstName} ${person.lastName} made deposit of ${amount}$!`);
        return `${person.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let person = this.allCustomers.find(x => x.personalId === personalId);

        if (!person) {
            throw new Error('We have no customer with this ID!');
        }

        if (person.totalMoney - amount < 0) {
            throw new Error(`${firstName} ${lastName} does not have enough money to withdraw that amount!`);
        }

        person.totalMoney -= amount;
        person.transactions.push(`${firstName} ${lastName} withdrew ${amount}$!`);

        return `${person.totalMoney}$`
    }

    customerInfo(personalId) {
        let person = this.allCustomers.find(x => x.personalId === personalId);

        if (!person) {
            throw new Error('We have no customer with this ID!');
        }

        let result = [`Bank name: ${this._bankName}`, `Customer name: ${person.firstName} ${person.lastName}`, `Customer ID: ${person.personalId}`, `Total Money: ${person.totalMoney}`, 'Transactions:',];

        let transactions = person.transactions.reverse();

        if (transactions.length === 0) {
            return result.join('\n');
        }
        
        let num = transactions.length;
        transactions.forEach(t => {
            result.push(`${num}. ${t}`);
            num--;
        });

        return result.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));