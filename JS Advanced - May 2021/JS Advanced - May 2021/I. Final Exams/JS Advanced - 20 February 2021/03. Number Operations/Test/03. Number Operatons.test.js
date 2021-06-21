let { expect } = require('chai');

let numberOperations = require('../03. Number Operations');

describe('number Oparations', () => {
    describe('powNumber', () => {
        it('Should return the number squared', () => {
            expect(numberOperations.powNumber(0)).to.equal(0)
            expect(numberOperations.powNumber(1)).to.equal(1)
            expect(numberOperations.powNumber(2)).to.equal(4)
            expect(numberOperations.powNumber(5)).to.equal(25);
            expect(numberOperations.powNumber(5)).to.equal(25);
        });
    });

    describe('numberChecker', () => {
        it('Should throw error when input is NaN', () => {
            expect(function () { numberOperations.numberChecker('test') }).to.throw();
            expect(() => numberOperations.numberChecker('1Q')).to.throw();
        });

        it('Should return "The number is lower than 100!"', () => {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(52)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });

        it('Should return "The number is greater or equal to 100!"', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(234)).to.equal('The number is greater or equal to 100!');
        });
    });

    describe('sumArrays', () => {
        it('Should return summed corresponding indexes', () => {
            expect(numberOperations.sumArrays([1, 1, 1, 1], [1, 1, 1])).to.have.members([2, 2, 2, 1]);
            expect(numberOperations.sumArrays([1, 1, 1], [1, 1, 1, 1])).to.have.members([2, 2, 2, 1]);
        });
    });
});