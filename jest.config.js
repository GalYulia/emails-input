module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)(test).ts'],
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};
