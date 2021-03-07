import 'mocha';
import { expect } from 'chai';
import { pokeDamage } from '../src/ejercicio-9';

describe('pokeDamage working', () => {
  it('An Agua type attack from a 1 attack pokemon against Fire pokemon with 1 defense deals 100 damage',
    () => {
      expect(pokeDamage("Agua", "Fuego", 1, 1)).to.equal(100);
    });
});