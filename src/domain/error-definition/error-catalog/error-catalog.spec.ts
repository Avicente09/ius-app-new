import { APP_ERROR_CATALOG } from './error-catalog';

describe('domain:error-definition:error-catalog', () => {
  test('It should match the existing error catalog', () => {
    expect(APP_ERROR_CATALOG).toStrictEqual([
      {
        code: 'UNHANDLED_EXCEPTION',
        description: 'An unhandled exception has occurred.',
      },
      {
        code: 'ERR-001',
        description: 'No order returned from the repository implementation',
      },
    ]);
  });
});
