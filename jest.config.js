/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.stories.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  coverageReporters: ['json', 'json-summary', 'html'],
};
