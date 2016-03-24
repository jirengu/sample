
var assert = require('chai').assert,
	sum = require('../lib/sum.js');

describe('sum', function () {
    it('should get sum of numbers correctly', function () {
        assert.equal( sum(1,2,3), 6,  'test sum(1,2,3) failed');
        assert.equal( sum(1,2), 3,  'test sum(1,2) failed');
        assert.equal( sum(3,2,7,9), 21,  'test sum(3,2,7,9) failed');
    });
});