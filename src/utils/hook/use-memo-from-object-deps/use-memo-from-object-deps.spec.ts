import { renderHook } from '../../../../test/test-utils';
import { useMemoFromObjectDeps } from './use-memo-from-object-deps';

describe('utils:hook:use-memo-from-object-deps', () => {
  it('should return the same value when the deps are the same', () => {
    const { result, rerender } = renderHook(
      ({ deps }) => useMemoFromObjectDeps(() => Math.random(), deps),
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

  it('should return a different value when the deps are different', () => {
    const { result, rerender } = renderHook(
      ({ deps }) => useMemoFromObjectDeps(() => Math.random(), deps),
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
