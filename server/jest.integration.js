module.exports = {
  preset: 'ts-jest',
  testTimeout: 10000,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '.',
        outputName: 'test-report.integration.xml',
      },
    ],
  ],
  testEnvironment: 'node',
  testMatch: ['**/*.integration.spec.ts'],
}
