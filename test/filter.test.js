const { expect } = require('chai');
const { evenNumbers } = require('../filter');

describe('evenNumbers()', () => {
  it('should return only even numbers', () => {
    const result = evenNumbers([1, 2, 3, 4, 5, 6]);

    expect(result).to.deep.equal([2, 4, 6]);
  });
  
  it('expect array length to be 3', () => {
    const result = evenNumbers([1,2,3,4,5,6]);

    expect(result).to.have.lengthOf(3);
  })
});