/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const base = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = Object.assign({}, base, {
    devtool: 'inline-source-map',
    plugins: base.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({ filename: '[name]/style.[chunkhash:8].css', disable: false, allChunks: true })



    ]),
    output: {
        filename: '[name]/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // 'js': 'babel-loader'
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this nessessary.
                        // 'scss': 'vue-style-loader!css-loader!sass-loader',
                        // 'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                        css: ExtractTextPlugin.extract({loader:'css-loader',options:{sourceMap:false}}),
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({loader:'css-loader',options:{sourceMap:false}}),

            }
        ]
    }

})