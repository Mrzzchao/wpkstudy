/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, "../src"),
    entry: {
        jczq: [path.join(__dirname, '../src/jczq/main.js')],
        jclq: [path.join(__dirname, '../src/jclq/main.js')],
        vendor: ['vue', 'vue-router', 'vuex', 'v-tap', 'vuex-router-sync', 'es6-promise']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue'],
        modules: [path.resolve(__dirname, "../src"), "node_modules"]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            filename: 'jczq/index.html',
            title: '竞彩足球',
            template: path.join(__dirname, '../src/jczq/index.ejs'),
            chunks: ['manifest', 'vendor', 'jczq']
        }),
        new HtmlWebpackPlugin({
            filename: 'jclq/index.html',
            title: '竞彩篮球',
            template: path.join(__dirname, '../src/jclq/index.ejs'),
            chunks: ['manifest', 'vendor', 'jclq']
        }),

        new CopyWebpackPlugin([
            {from: 'login', to: 'login'},
        ])
    ]
};