import { renderHook } from '../../../../../test/test-utils';
import { useFoodForm } from './use-food-form';

describe('presentation:components:organisms:food-form:hook', () => {
  test('It should return the established values', () => {
    const { result } = renderHook(() => useFoodForm());

    expect(result.current).toStrictEqual({
      handleSubmit: expect.any(Function),
      control: expect.any(Object),
      getValues: expect.any(Function),
    });
  });

  //TODO add more tests to actually test the hook behavior
});
