module.exports = {
    preset: 'jest',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
};