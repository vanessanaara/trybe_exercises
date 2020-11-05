const sum = require('../src/sum');

describe('sums two values', () => {
  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('throws error when a string is passes as parameter', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('"parameters must be numbers" is the error message', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
})