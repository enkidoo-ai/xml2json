// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: ['*.ts'],
};
