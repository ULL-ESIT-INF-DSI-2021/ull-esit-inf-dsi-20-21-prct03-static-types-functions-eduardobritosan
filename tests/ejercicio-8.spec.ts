import 'mocha';
import { expect } from 'chai';
import { ipCalc } from '../src/ejercicio-8';

describe('ipCalc working', () => {
  it('there\'s 246 addresses between 20.0.0.10 and 20.0.1.0', () => {
    expect(ipCalc("20.0.0.10", "20.0.1.0")).to.equal(246);
  });
});
