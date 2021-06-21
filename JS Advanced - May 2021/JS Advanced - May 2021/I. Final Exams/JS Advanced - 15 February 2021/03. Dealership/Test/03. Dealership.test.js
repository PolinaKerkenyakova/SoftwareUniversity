let { expect } = require('chai');
let dealership = require('../03. Dealership');

describe('dealership', () => {
    describe('newCarCost', () => {
        it('When discountForOldCar includes oldCarModel', () => {
            expect(dealership.newCarCost('Audi A4 B8', 50000)).to.equal(35000);
            expect(dealership.newCarCost('Audi A6 4K', 50000)).to.equal(30000);
            expect(dealership.newCarCost('Audi A8 D5', 50000)).to.equal(25000);
            expect(dealership.newCarCost('Audi TT 8J', 50000)).to.equal(36000);
        });

        it('When discountForOldCar do not includes oldCarModel', () => {
            expect(dealership.newCarCost('Car Model', 50000)).to.equal(50000);
        });
    });

    describe('carEquipment', () => {
        it('Should return array with selected extras', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2, 3])).to.have.members(['heated seats', 'sport rims', 'navigation'])
        });
    });

    describe('euroCategory', () => {
        it('When eco category >= 4', () => {
            let price = 15000;
            let totalPrice = price * .95;
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${totalPrice}.`);
        });

        it('When eco category < 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});