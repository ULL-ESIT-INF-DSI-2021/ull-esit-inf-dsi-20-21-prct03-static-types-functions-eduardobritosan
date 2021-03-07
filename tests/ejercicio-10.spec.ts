import 'mocha';
import { expect } from 'chai';
import { isValidUsername } from '../src/ejercicio-10';

describe('isValidUsername working', () => {
  it('u__hello$122__ is not valid',
    () => {
      expect(isValidUsername("u__hello$122__")).to.be.false;
    });
  it('u__heA$1 is valid',
    () => {
      expect(isValidUsername("u__heA$1")).to.be.true;
    });
});