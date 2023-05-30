export const APP_ERROR_CATALOG = [
  {
    code: 'UNHANDLED_EXCEPTION',
    description: 'An unhandled exception has occurred.',
  },
  {
    code: 'ERR-001',
    description: 'No order returned from the repository implementation',
  },
] as const;

export type ErrorCode = typeof APP_ERROR_CATALOG[number]['code'];
