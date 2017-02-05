/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
module.exports = Object.assign({}, base, {
    // devtool: '#cheap-source-map',
    devtool: '#hidden-source-map',
    plugins: base.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true,
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({ filename: '[name]/style.[chunkhash:8].css', disable: false, allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            filename: '[name]/[name].[chunkhash:8].js'

        }),
        new WebpackAssetsManifest({})


    ]),
    output: {
        filename: '[name]/main.[chunkhash:8].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: "css-loader"
                        }),
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),

            }
        ]
    }

})