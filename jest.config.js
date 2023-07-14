module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    '^@presentation/theming/fonts/(.*)\\.woff2$':
      '<rootDir>/__mocks__/fontMock.js',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@implementation/(.*)': '<rootDir>/src/implementation/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
  },
  coveragePathIgnorePatterns: [
    'mocks',
    'test',
    'index.ts',
    'config',
    'fonts.d.ts',
    'types.d.ts',
    'App.tsx', // TODO: Research if it is a good practice to test App.tsx
  ],
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95,
    },
  },
};
