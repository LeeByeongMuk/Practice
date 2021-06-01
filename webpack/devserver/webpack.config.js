var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "none",
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000
    },
    module: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};