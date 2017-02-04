/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        jczq: path.join(__dirname, '../src/jczq/main.js'),
        jclq: path.join(__dirname, '../src/jclq/main.js'),
        vendor: ['vue', 'vue-router', 'vuex','v-tap','vuex-router-sync']
    },
    output: {
        filename: '[name]/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({loader:'css-loader',options:{sourceMap:false}}),

            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            filename: 'jczq/index.html',
            template: path.join(__dirname, '../src/jczq/index.ejs')
        }),
        new HtmlWebpackPlugin({
            filename: 'jclq/index.html',
            template: path.join(__dirname, '../src/jclq/index.ejs')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']

        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new ExtractTextPlugin({ filename: '[name]/style.[chunkhash:8].css', disable: false, allChunks: true })



    ]
};