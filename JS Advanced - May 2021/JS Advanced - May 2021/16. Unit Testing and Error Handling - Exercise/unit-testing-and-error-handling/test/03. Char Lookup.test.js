const { expect } = require('chai');
const lookupChar = require('../03. Char Lookup');

describe('lookupChar()', () => {

    it('Should return the char from the targeted index', () => {
        expect(lookupChar('test', 1)).to.equal('e');
        expect(lookupChar('I Love Unit Tests', 7)).to.equal('U');
    });

    it('Should take only string as first argument', () => {
        expect(lookupChar(5, 1)).to.be.undefined;
        expect(lookupChar({}, 2)).to.be.undefined;
        expect(lookupChar([], 10)).to.be.undefined;
        expect(lookupChar(undefined, 6)).to.be.undefined;
        expect(lookupChar(NaN, 3)).to.be.undefined;
        expect(lookupChar(true, 3)).to.be.undefined;
        expect(lookupChar(false, 3)).to.be.undefined;
    });

    it('Should take integer numbers as second argument', () => {
        expect(lookupChar('test', 1.2)).to.be.undefined;
        expect(lookupChar('test', 4.5237)).to.be.undefined;
    });

    it('Should return empty string when index is less than 0 or more than string.length', () => {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
        expect(lookupChar('test', 6)).to.equal('Incorrect index');
    });
});