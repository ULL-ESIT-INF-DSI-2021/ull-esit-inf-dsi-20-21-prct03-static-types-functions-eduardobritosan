import 'mocha';
import { expect } from 'chai';
import { nextHighest } from '../src/ejercicio-7';

describe('nextHighest working', () => {
  it('513\'s next highest number using same digits is 531', () => {
    expect(nextHighest(513)).to.equal(531);
  });
  it('21 has no higher number with same digits', () => {
    expect(nextHighest(21)).to.equal(-1);
  });
});