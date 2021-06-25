class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};

        if (this.budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
    }

    shopping([product, price]) {
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(product);
        this.budget -= price;

        return `You have successfully bought ${product}!`;
    }

    recipes({ recipeName, productsList }) {
        let areProductsInStock = productsList.every(x => this.products.includes(x));

        if (areProductsInStock) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`;
        }

        throw new Error('We do not have this product');
    }

    inviteGuests(name, dish) {
        let isDishPresent = this.dishes.find(d => d.recipeName === dish);

        if (!isDishPresent) {
            throw new Error('We do not have this dish');
        }

        let isGuestPresent = Object.keys(this.guests).find(n => n == name);

        if (isGuestPresent) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];
        for (let [name, dish] of Object.entries(this.guests)) {
            let list = this.dishes.find(d => d.recipeName === dish).productsList;
            result.push(`${name} will eat ${dish}, which consists of ${list.join(', ')}`)
        }

        return `${result.join('\n')}`;
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());