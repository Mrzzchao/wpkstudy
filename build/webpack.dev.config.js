/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base.config');

module.exports = Object.assign({}, base, {
    devtool: 'eval-source-map',
    output: {
        filename: '[name]/[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: base.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),

    ]),
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'css-loader',
                    'style-loader'
                ]

            }
        ]
    }

})