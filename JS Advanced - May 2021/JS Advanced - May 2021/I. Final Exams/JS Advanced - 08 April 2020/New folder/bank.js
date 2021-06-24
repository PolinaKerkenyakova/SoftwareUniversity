class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {

        if (this.allCustomers.find(x => x.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        if (!this.allCustomers.find(x => x.personalId == personalId)) {
            throw new Error(`We have no customer with this ID!`);
        }

        let customer = this.getCustomer(personalId);

        if (!customer.transactions) {
            customer.transactions = [];
        }

        if (customer.totalMoney) {
            customer.totalMoney += amount;
        } else {
            customer.totalMoney = amount;
        }

        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        if (!this.allCustomers.find(x => x.personalId == personalId)) {
            throw new Error(`We have no customer with this ID!`);
        }

        let customer = this.getCustomer(personalId);

        if (!customer.transactions) {
            customer.transactions = [];
        }

        if (customer.totalMoney - amount < 0) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        if (!this.allCustomers.find(x => x.personalId == personalId)) {
            throw new Error(`We have no customer with this ID!`);
        }


        this.allCustomers.forEach(customer => {
            let customerArr = [];

            let transactionsArr = [];

            let transactionsCount = customer.transactions.length;
            customer.transactions = customer.transactions.reverse();
            customer.transactions.forEach(transaction => {
                transactionsArr.push(`${transactionsCount}. ${transaction}`);
                transactionsCount--;
                if(transactionsCount === 1) {return;}
            });

            customerArr.push(`Bank name: ${this.bankName}
            Customer name: ${customer.firstName} ${customer.lastName}
            Customer ID: ${customer.personalId}
            Total Money: ${customer.totalMoney}
            Transactions
            ${transactionsArr.join('\n')}`)

            return customerArr.join('\n');
        });
    }

    getCustomer(personalId) {
        return this.allCustomers.find(x => x.personalId === personalId);
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