import 'mocha';
import { expect } from 'chai';
import { isValidISBN } from '../src/ejercicio-6';

describe('isValidISBN working', () => {
  it('3-598-21507-X is a valid ISBN', () => {
    expect(isValidISBN("3-598-21507-X")).to.be.true;
  });
});

