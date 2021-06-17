const {expect} = require('chai');
const isOddOrEven = require('../02. Even Or Odd');

describe('isOddOrEven()', () => {
    it('When length is even', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    });

    it('When length is even', () => {
        expect(isOddOrEven('abc')).to.equal('odd');
    });

    it('when input argument is not string return undefined', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
        expect(isOddOrEven(false)).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven(NaN)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
    });
});