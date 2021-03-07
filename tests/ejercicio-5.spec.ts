import 'mocha';
import { expect } from 'chai';
import { onePunch } from '../src/ejercicio-5';

describe('onePunch working', () => {
  it('Beard Jeans Hairbrush Knuckleduster Sand gets punched', () => {
    expect(onePunch("Beard Jeans Hairbrush Knuckleduster Sand")).to
      .be.equal("Brd Hirbrush Jns Knuckldustr Snd");
  });
});

