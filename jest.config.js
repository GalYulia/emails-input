module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testMatch: [
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    moduleFileExtensions: ['ts', 'js'],
};