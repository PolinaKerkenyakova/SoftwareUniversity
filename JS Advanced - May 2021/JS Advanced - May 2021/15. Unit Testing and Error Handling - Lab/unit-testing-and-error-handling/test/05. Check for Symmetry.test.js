let { expect } = require('chai');
let isSymmetric = require('../05. Check for Symmetry');

describe('isSymmetric()', () => {
    it('Input is array of even numbers', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });

    it('Input is array of odd numbers', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('Input is array of multiple elements', () => {
        expect(isSymmetric([1, 'true', undefined, Date, undefined, 'true', 1])).to.be.true;
        expect(isSymmetric([1, 'true', undefined, Date, Date, undefined, 'true', 1])).to.be.true;
    });

    it('Input should contains only correct type elements', () => {
        expect(isSymmetric([1, -1])).to.be.false;
        expect(isSymmetric([1, '1'])).to.be.false;
        expect(isSymmetric([65, 85, '65'])).to.be.false;
    });

    it('Input can\'t be anything other then array', () => {
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(true)).to.be.false;
        expect(isSymmetric(false)).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
        expect(isSymmetric('')).to.be.false;
        expect(isSymmetric('string')).to.be.false;
    });
});