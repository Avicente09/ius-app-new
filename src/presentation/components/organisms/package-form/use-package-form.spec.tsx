import { renderHook } from '../../../../../test/test-utils';
import { usePackageForm } from './use-package-form';

describe('presentation:components:organisms:package-form:hook', () => {
  test('It should return the established values', () => {
    const { result } = renderHook(() => usePackageForm());

    expect(result.current).toStrictEqual({
      handleSubmit: expect.any(Function),
      control: expect.any(Object),
      getValues: expect.any(Function),
    });
  });

  //TODO add more tests to actually test the hook behavior
});
