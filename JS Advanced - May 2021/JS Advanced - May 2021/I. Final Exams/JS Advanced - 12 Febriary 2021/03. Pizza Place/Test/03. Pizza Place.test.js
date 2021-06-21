let { expect } = require('chai');
let pizzUni = require('../03. Pizza Place');


describe('pizzUni', () => {
    describe('makeAnOrder', () => {
        it('Should order at least 1 pizza', () => {
            expect(()=> pizzUni.makeAnOrder({})).to.throw();
        });
        it('When order only pizza', () => {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Peperoni'})).to.equal('You just ordered Peperoni');
        });

        it('When order pizza and drink', () => {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Peperoni', orderedDrink: 'Coca Cola'})).to.equal('You just ordered Peperoni and Coca Cola.');
        });
    });

    describe('getRemainingWork', () => {
        it('When all orders are completed', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'Peperoni', status: 'ready'}])).to.equal('All orders are complete!');
            expect(pizzUni.getRemainingWork([{pizzaName: 'Peperoni', status: 'ready'}, {pizzaName: 'Margarita', status: 'ready'}])).to.equal('All orders are complete!');
        });

        it('When all orders are not completed', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'Peperoni', status: 'preparing'}])).to.equal(`The following pizzas are still preparing: Peperoni.`);
            expect(pizzUni.getRemainingWork([{pizzaName: 'Peperoni', status: 'preparing'}, {pizzaName: 'Margarita', status: 'preparing'}])).to.equal(`The following pizzas are still preparing: Peperoni, Margarita.`);
        });

    });

    describe('orderType', () => {
        it('When order is carry out', () => {
            expect(pizzUni.orderType(20, 'Carry Out')).to.equal(18);
        });

        it('When order is delivery', () => {
            expect(pizzUni.orderType(20, 'Delivery')).to.equal(20);
        });
    });
});