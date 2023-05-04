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
  moduleNameMapper: {
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@implementation/(.*)': '<rootDir>/src/implementation/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
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
