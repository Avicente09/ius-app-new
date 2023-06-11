import { act, renderHook } from '../../../../test/test-utils';
import { useObjectReducer } from './use-object-reducer';

type TestType = {
  foo: string;
  bar: number;
  baz: boolean;
};

describe('utils:hook:use-object-reducer', () => {
  test('It should render the hook with the initial value', () => {
    const { result } = renderHook(() =>
      useObjectReducer<TestType>({ foo: 'foo', bar: 1, baz: true })
    );
    expect(result.current[0]).toStrictEqual({ foo: 'foo', bar: 1, baz: true });
  });

  test('It should update the state with the setter action', async () => {
    expect.assertions(1);

    const { result } = renderHook(() =>
      useObjectReducer<TestType>({ foo: 'foo', bar: 1, baz: true })
    );

    await act(() => result.current[1]({ foo: 'bar' }));

    expect(result.current[0]).toStrictEqual({ foo: 'bar', bar: 1, baz: true });
  });

  test('It should reset the state with the reset action', async () => {
    expect.assertions(1);

    const { result } = renderHook(() =>
      useObjectReducer<TestType>({ foo: 'foo', bar: 1, baz: true })
    );

    await act(() => result.current[1]({ reset: { foo: 'bar' } as TestType }));

    expect(result.current[0]).toStrictEqual({ foo: 'bar' });
  });

  test('It should clear the state with the clear action', async () => {
    expect.assertions(1);

    const { result } = renderHook(() =>
      useObjectReducer<TestType>({ foo: 'foo', bar: 1, baz: true })
    );

    await act(() => result.current[1]('clear'));

    expect(result.current[0]).toStrictEqual({} as TestType);
  });
});
