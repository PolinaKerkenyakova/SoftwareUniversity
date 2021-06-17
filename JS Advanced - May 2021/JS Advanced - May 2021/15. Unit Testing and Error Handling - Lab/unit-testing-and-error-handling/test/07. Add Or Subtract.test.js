const {expect} = require('chai');
const createCalculator = require('../07. Add Or Subtract');

describe('createCalculator()', () => {
    it('method add()', () => {
        let calculator = createCalculator();
        calculator.add(1);
        let expResult = 1;
        let actResult = calculator.get();
        expect(expResult).to.equal(actResult);
    });

    it('method subtract()', () => {
        let calculator = createCalculator();
        calculator.subtract(1);
        let expResult = -1;
        let actResult = calculator.get();
        expect(expResult).to.equal(actResult)
    });

    it ('should works with "3"', () => {
        let calculator = createCalculator();
        calculator.subtract(1);
        calculator.add('5');
        let expResult = 4;
        let actResult = calculator.get();
        expect(expResult).to.be.equal(actResult);
    });

    it ('should not works with "a"', () => {
        let calculator = createCalculator();
        calculator.add('5');
        calculator.subtract("a"); calculator.subtract(1);
        let actResult = calculator.get();
        expect(actResult).to.be.NaN;
    }); 
});