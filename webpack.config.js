var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var PUBLIC = path.resolve(__dirname, 'src/client');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: PUBLIC,
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel'
        }, {
            test: /\.css?/,
            include: APP_DIR,
            loader: 'style-loader!css-loader'
        }]
    }
};

module.exports = config;
