import { renderHook } from '../../../../../test/test-utils';
import { useLittleErrandsForm } from './use-little-errands-form';

describe('presentation:components:organisms:little-errands-form:hook', () => {
  test('It should return the established values', () => {
    const { result } = renderHook(() => useLittleErrandsForm());

    expect(result.current).toStrictEqual({
      handleSubmit: expect.any(Function),
      control: expect.any(Object),
      getValues: expect.any(Function),
    });
  });

  //TODO add more tests to actually test the hook behavior
});
