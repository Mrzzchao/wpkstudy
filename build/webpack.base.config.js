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
        jrtt: [path.join(__dirname, '../src/jrtt/main.js')],
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
            filename: 'jrtt/index.html',
            title: '今日头条',
            template: path.join(__dirname, '../src/jrtt/index.ejs'),
            chunks: ['manifest', 'vendor', 'jczq']
        }),

        /*new CopyWebpackPlugin([
            {from: 'login', to: 'login'},
        ])*/
    ]
};