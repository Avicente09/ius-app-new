import { identifyRootCause } from './identify-root-cause';

describe('src/domain/error-definition/identify-root-cause', () => {
  test('It should identify an Error', () => {
    const error = new Error('Test error');
    const rootCause = identifyRootCause(error);
    expect(rootCause).toEqual(error);
  });

  test('It should identify a string', () => {
    const error = 'Test error';
    const rootCause = identifyRootCause(error);
    expect(rootCause).toEqual(new Error(error));
  });

  test('It should identify an object with a message', () => {
    const error = { message: 'Test error' };
    const rootCause = identifyRootCause(error);
    expect(rootCause).toEqual(new Error(error.message));
  });

  test('It should identify an object without a message', () => {
    const error = { code: 'TEST_CODE' };
    const rootCause = identifyRootCause(error);
    expect(rootCause).toEqual(new Error(JSON.stringify(error)));
  });

  test('It should identify an object that is not serializable', () => {
    // Intentional circular reference
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const foo: any = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bar: any = {};
    foo.bar = bar;
    bar.foo = foo;

    const rootCause = identifyRootCause({ foo, bar });
    expect(rootCause).toEqual(new Error('Non serializable error'));
  });

  test('It should identify an unknown source', () => {
    const error = 123;
    const rootCause = identifyRootCause(error);
    expect(rootCause).toEqual(new Error('Empty error source'));
  });
});
