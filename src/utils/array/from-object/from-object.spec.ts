import { fromObject } from './from-object';

describe('utils:array:from-object', () => {
  test('It should parse an object into an array', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = fromObject(obj);
    expect(result).toEqual(['a', 1, 'b', 2, 'c', 3]);
  });

  test('It should throw an error if the source is null', () => {
    expect(() => fromObject(null)).toThrowError('Source cannot be null');
  });

  test('It should throw an error if the source is not an object', () => {
    expect(() => fromObject(1)).toThrowError('Source must be an object');
  });
});
