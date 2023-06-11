import { AppError } from './app-error';

describe('domain:error-definition:app-error', () => {
  test('It should construct the AppError with the given code', () => {
    const code = 'TEST_CODE';
    const error = new AppError({ code });
    expect(error.code).toEqual(code);
  });

  test('It should assert an unknown source to an AppError', () => {
    const appError = AppError.assert(new Error('Unknown error'));
    expect(appError.code).toEqual('UNHANDLED_EXCEPTION');
  });

  test('It should assert an AppError to an AppError', () => {
    const appError = AppError.assert(new AppError({ code: 'TEST_CODE' }));
    expect(appError.code).toEqual('TEST_CODE');
  });

  test('It should create a rejection handler', async () => {
    expect.assertions(3);

    const rejectionHandler = AppError.rejectionHandler();

    expect(rejectionHandler).toBeInstanceOf(Function);

    try {
      await rejectionHandler(new AppError({ code: 'TEST_CODE' }));
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBeInstanceOf(AppError);
      // eslint-disable-next-line jest/no-conditional-expect
      expect((error as any).code).toEqual('TEST_CODE');
    }
  });
});
