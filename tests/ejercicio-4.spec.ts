import 'mocha';
import { expect } from 'chai';
import { fromSnakeToCamelCase, fromCamelToSnakeCase } from '../src/ejercicio-4';

describe('fromSnakeToCamelCase working', () => {
  it('hello_world becomes helloWorld', () => {
    expect(fromSnakeToCamelCase("hello_world")).to.be.equal("helloWorld");
  });
});

describe('fromCamelToSnakeCase working', () => {
  it(' becomes hello_world', () => {
    expect(fromCamelToSnakeCase("helloWorld")).to.be.equal("hello_world");
  });
});
