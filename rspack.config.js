const path = require('path');

module.exports = {
    entry: {
        request: './src/request.ts',
        response: './src/response.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        iife: true, // Wrap in IIFE to avoid polluting global scope
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'builtin:swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                            },
                        },
                    },
                },
            },
        ],
    },
    target: 'web', // Important for Surge environment
    optimization: {
        minimize: true,
    },
};
