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
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  coveragePathIgnorePatterns: ['mocks', 'test', 'index.ts'],
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      statements: 48,
      branches: 34,
      functions: 42,
      lines: 47,
    },
  },
};
