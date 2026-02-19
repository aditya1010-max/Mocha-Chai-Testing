const {expect} = require('chai');
const {add} = require('../math');

describe('add()', () => {
    it('should return the sum of two numbers', () => {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });
    it('should return a negative number when sum is below zero', () => {
        const result = add(-5, 2);
        expect(result).to.equal(-3);
    })
    it('should return 0 when both nnumbers are 0', () => {
        const result = add(0,0);
        expect(result).to.equal(0);
    })
})