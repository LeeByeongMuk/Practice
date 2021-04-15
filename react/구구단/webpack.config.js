const path = require('path');

module.exports = {
    name: 'gugudan',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client', './GuGuDan']
    },

    module: {
        rules: [{
            test: /\.js?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            }
        }],
    },

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }

}