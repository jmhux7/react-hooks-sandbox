module.exports = {
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        filename: 'TestExecutionReport.html',
        publicPath: './audit',
      },
    ],
  ],
  coverageDirectory: './audit/coverage',
  coveragePathIgnorePatterns: ['node_modules'],
  testRegex: '((\\.|/*.)(test))\\.js?$',
  clearMocks: true,
  testPathIgnorePatterns: ['/node_modules/'],
  transform: { '\\.(js|jsx)$': 'babel-jest' },
  setupFilesAfterEnv: ['<rootDir>setupTests.js'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
}
