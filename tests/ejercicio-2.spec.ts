import 'mocha';
import { expect } from 'chai';
import { factorialize, factorialToDecimal, decimalToFactorial } from '../src/ejercicio-2';

describe('factorialize working', () => {
  it('4! equals 24', () => {
    expect(factorialize(4)).to.equal(24);
  });
});

describe('factorialToDecimal working', () => {
  it('"341010 equals" 463', () => {
    expect(factorialToDecimal("341010")).to.equal(463);
  });
});

describe('decimalToFactorial working', () => {
  it('463 equals "341010"', () => {
    expect(decimalToFactorial(463)).to.equal("341010");
  });
});
