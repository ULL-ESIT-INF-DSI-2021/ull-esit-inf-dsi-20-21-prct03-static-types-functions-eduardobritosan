import 'mocha';
import { expect } from 'chai';
import { isValid } from '../src/ejercicio-3';

describe('isValid working', () => {
  it('3hey5hello2hi is valid', () => {
    expect(isValid("3hey5hello2hi")).to.be.true;
  });
});

