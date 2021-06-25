class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer({ firstName, lastName, personalId }) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (customer) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }

        this.allCustomers.push({ firstName, lastName, personalId });
        return { firstName, lastName, personalId };
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (!customer.totalMoney) {
            customer.totalMoney = 0;
        }

        if (!customer.transactions) {
            customer.transactions = [];
        }

        customer.totalMoney += amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (customer.totalMoney - amount < 0) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`
    }

    customerInfo(personalId) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        let result = [`Bank name: ${this._bankName}`, `Customer name: ${customer.firstName} ${customer.lastName}`, `Customer ID: ${customer.personalId}`, `Total Money: ${customer.totalMoney}$`, 'Transactions:',];

        let transactions = customer.transactions.reverse();

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