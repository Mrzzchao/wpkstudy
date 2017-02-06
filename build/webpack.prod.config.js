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
    // devtool: '#hidden-source-map',
    plugins: base.plugins.concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true,
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({
            // filename: '[name]/style.[chunkhash:8].css',
            // filename: '[name]/style.css',
            filename: '[name]/style.css?[chunkhash:8]',
            disable: false, allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            // filename: '[name]/[name].[chunkhash:8].js',
            // filename: '[name]/[name].js',
            filename: '[name]/[name].js?[chunkhash:8]',

        }),
        new WebpackAssetsManifest({})


    ]),
    output: {
        // filename: '[name]/main.[chunkhash:8].js',
        // filename: '[name]/main.js',
        filename: '[name]/main.js?[chunkhash:8]',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        // chunkFilename: '[name].[chunkhash:8].chunk.js',
        // chunkFilename: '[name].chunk.js',
        chunkFilename: '[name].chunk.js?[chunkhash:8]',
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

            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                query: {
                    name: '[path]/[name].[ext]?[hash:8]',
                }


            }
        ]
    }

})