/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const base = require('./webpack.base.config');

module.exports = Object.assign({}, base, {
    devtool: '#source-map',
    plugins: base.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

    ]),

})