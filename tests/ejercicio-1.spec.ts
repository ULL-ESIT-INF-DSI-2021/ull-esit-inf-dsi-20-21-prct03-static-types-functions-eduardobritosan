import 'mocha';
import { expect } from 'chai';
import { isLeapYear } from "../src/ejercicio-1";

describe('isLeapYear function test', () => {
  it('isLeapYear(2000) is expected to be true', () => {
    expect(isLeapYear(2000)).to.be.true;
  });
  it('isLeapYear(1997) is expected to be false', () => {
    expect(isLeapYear(1997)).to.be.false;
  });
});
