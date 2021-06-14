let isSymmetric = module.require('../05. check-for-symmetry');
let assert = require('chai').assert;


describe('Tests for isSymmetric()', () => {
    it('Input is expected to fail if non-array is provided', () => {
        let expectedResult = false;

        assert.equal(isSymmetric(null), expectedResult);
        assert.equal(isSymmetric({}), expectedResult);
        assert.equal(isSymmetric(undefined), expectedResult);
        assert.equal(isSymmetric(NaN), expectedResult);
        assert.equal(isSymmetric(''), expectedResult);
        assert.equal(isSymmetric(false), expectedResult);
        assert.equal(isSymmetric(true), expectedResult);
    });


    it('Input is expected to be symmetric arr', () => {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;
        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('All chars have to be from the correct type', () => {
        let input = ['1', '2', '3', '2', '1'];
        let expectedResult = false;
        let actualResult = isSymmetric(input);

        assert.isFalse(actualResult, expectedResult);
    });

    it('Should pass when empty arr is provided', () => {
        let expectedResult = true
        assert.isTrue(isSymmetric([]), expectedResult);
    });

    it('Should pass when one num is provided', () => {
        let input = [1];
        let expectedResult = true;
        let actualResult = isSymmetric(input);

        assert.isTrue(actualResult, expectedResult);
    });
});
