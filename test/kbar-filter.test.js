import { expect } from 'chai';
import { filterActions } from '../kbar-filter.js';

describe('filterActions()', () => {

  const actions = [
    {
      id: 'add-point',
      title: () => 'Add Point'
    },
    {
      id: 'add-line',
      title: () => 'Add Line'
    },
    {
      id: 'delete',
      title: () => 'Delete Feature'
    }
  ];

  it('should return all actions when query is empty', () => {
    const result = filterActions(actions, '');

    expect(result).to.equal(actions); // same reference is intentional
  });

  it('should return all actions when query is undefined', () => {
    const result = filterActions(actions);

    expect(result).to.equal(actions);
  });

  it('should filter actions by single word', () => {
    const result = filterActions(actions, 'add');

    expect(result).to.deep.equal([
      actions[0],
      actions[1]
    ]);
  });

  it('should filter actions by multiple words (order independent)', () => {
    const result = filterActions(actions, 'point add');

    expect(result).to.deep.equal([
      actions[0]
    ]);
  });

  it('should be case-insensitive', () => {
    const result = filterActions(actions, 'ADD LINE');

    expect(result).to.deep.equal([
      actions[1]
    ]);
  });

  it('should ignore extra spaces in query', () => {
    const result = filterActions(actions, '   add    line   ');

    expect(result).to.deep.equal([
      actions[1]
    ]);
  });

  it('should return empty array when no actions match', () => {
    const result = filterActions(actions, 'foo bar');

    expect(result).to.be.an('array').that.is.empty;
  });

  it('should not mutate the original actions array', () => {
    const copy = [...actions];

    filterActions(actions, 'add');

    expect(actions).to.deep.equal(copy);
  });

});