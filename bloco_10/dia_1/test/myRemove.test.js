const myRemove = require('../src/myRemove');

describe('removes an element in array', () => {
  test('returns the expected array without the element', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('does not return the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('does not modify the array', () => {
    const myArray = [3, 4, 5, 6];
    myRemove(myArray, 5);
    expect(myArray).toEqual([3, 4, 5, 6]);
  });

  test('returns the same parameter array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
