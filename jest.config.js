module.exports = {
  preset: 'react-native',
  moduleNameMapper: {'^@/(.*)$': '<rootDir>/$1'},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  transformIgnorePatterns: ['node_modules/?!(static-container)', 'jest-runner'],
  setupFiles: ['./src/jestSetup.ts'],
  globals: {'ts-jest': {isolatedModules: true}},
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js}', '!**/node_modules/**'],
};
