let sum = module.require('../04. sum-of-numbers');
let assert = require('chai').assert;

describe('Tests sumNumbers\' functionality', () => {
    it('Takes arr of nums as args', () => {
        let arr = [1, 2, 15, 150];

        let expectedResult = arr.reduce((a, x) => a + x, 0);

        let actualResult = sum(arr);

        assert.equal(actualResult, expectedResult);
    });
});

