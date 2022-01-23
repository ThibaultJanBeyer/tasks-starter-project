module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  coverageReporters: ['text', 'json'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '.',
        outputName: 'test-report.unit.xml',
      },
    ],
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['integration.spec.ts$', 'node_modules'],
}
