const path = require('path');

const {
    NODE_ENV = 'development',
} = process.env;

module.exports = {
    entry: {
        bundle: './src/index.js',
        scaling: './src/scaling.js',
    },
    mode: NODE_ENV,
    target: 'node',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'dist/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'esbuild-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.js'],
    },
};