import { renderHook } from '../../../../../test/test-utils';
import { usePurchaseForm } from './use-purchase-form';

describe('presentation:components:organisms:purchase-form:hook', () => {
  test('It should return the established values', () => {
    const { result } = renderHook(() => usePurchaseForm());

    expect(result.current).toStrictEqual({
      handleSubmit: expect.any(Function),
      control: expect.any(Object),
      getValues: expect.any(Function),
    });
  });

  //TODO add more tests to actually test the hook behavior
});
