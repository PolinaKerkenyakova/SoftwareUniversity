const { expect } = require('chai');
const { addFive, subtractTen, sum } = require('../04. Math Enforcer');

describe('mathEnforcer()', () => {

    describe('addFive()', () => {
        it('When parameter is a integer number', () => {
            addFive(5);
            let expectedResult = num += 5;
            let acrualResult = 10;
            expect(expectedResult).to.equal(acrualResult);
        });

        it('When parameter is a floating number', () => {
            addFive(5.1);
            let expectedResult = num += 5;
            let acrualResult = 10.1;
            expect(expectedResult).to.equal(acrualResult);
        });

        it('When parameter is not a number', () => {
            expect(addFive('5')).to.equal(undefined);
            expect(addFive('test')).to.equal(undefined);
        });
    });

    describe('subtractTen()', () => {
        it('When parameter is a integer number', () => {
            subtractTen(5);
            let expectedResult = num -= 10;
            let acrualResult = -5;
            expect(expectedResult).to.equal(acrualResult);
        });

        it('When parameter is a floating number', () => {
            subtractTen(10.5);
            let expectedResult = num -= 10;
            let acrualResult = 0.5;
            expect(expectedResult).to.equal(acrualResult);
        });

        it('When parameter is not a number', () => {
            expect(subtractTen('10')).to.equal(undefined);
            expect(subtractTen('test')).to.equal(undefined);
        });
    });


    describe('sum()', () => {
        it('When parameters are not numbers', () => {
            expect(sum('5', '1')).to.equal(undefined);
            expect(sum('test', 'tset')).to.equal(undefined);
        });

        it('When parameters are integer numbers', () => {
            expect(sum(1, 1)).to.equal(2);
            expect(sum(-1, -2)).to.equal(-3);
        });

        it('When parameters are floating numbers', () => {
            expect(sum(1.5, 1.6)).to.be.closeTo(3, 0.5);
            expect(sum(-1.2, -1.3)).to.be.closeTo(-2, 0.6);
        });
    });
});