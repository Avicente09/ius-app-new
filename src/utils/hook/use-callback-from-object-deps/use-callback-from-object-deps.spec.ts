import { renderHook } from '../../../../test/test-utils';
import { useCallbackFromObjectDeps } from './use-callback-from-object-deps';

describe('utils:hook:use-callback-from-object-deps', () => {
  test('It should return the same value when the deps are the same', () => {
    expect.assertions(1);

    const { result, rerender } = renderHook(
      ({ deps }) => useCallbackFromObjectDeps(() => Math.random(), deps),
      {
        initialProps: {
          deps: { a: 1, b: 2 },
        },
      }
    );

    const firstValue = result.current;

    rerender({ deps: { a: 1, b: 2 } });
    const secondValue = result.current;

    expect(firstValue).toBe(secondValue);
  });

  test('It should return a different value when the deps are different', () => {
    expect.assertions(1);

    const { result, rerender } = renderHook(
      ({ deps }) => useCallbackFromObjectDeps(() => Math.random(), deps),
      {
        initialProps: {
          deps: { a: 1, b: 2 },
        },
      }
    );

    const firstValue = result.current;

    rerender({ deps: { a: 1, b: 3 } });
    const secondValue = result.current;

    expect(firstValue).not.toBe(secondValue);
  });
});
