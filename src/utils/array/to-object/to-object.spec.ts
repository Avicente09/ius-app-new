import { toObject } from './to-object';

describe('utils:array:to-object', () => {
  test('It should parse an array into an object', () => {
    const arr = ['a', 1, 'b', 2, 'c', 3];
    const result = toObject(arr);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('It should throw an error if the source is null', () => {
    expect(() => toObject(null as any)).toThrowError('Source cannot be null');
  });

  test('It should throw an error if the source is not an array', () => {
    expect(() => toObject(1 as any)).toThrowError('Source must be an array');
  });

  test('It should throw an error if the source is empty', () => {
    expect(() => toObject([])).toThrowError('Source cannot be empty');
  });

  test('It should throw an error if the source has an odd number of elements', () => {
    expect(() => toObject(['a', 1, 'b', 2, 'c'])).toThrowError(
      'Source must have an even number of elements'
    );
  });
});
