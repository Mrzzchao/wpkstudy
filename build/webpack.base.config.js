/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        jczq: [path.join(__dirname, '../src/jczq/main.js')],
        jclq: [path.join(__dirname, '../src/jclq/main.js')],
        vendor: ['vue', 'vue-router', 'vuex','v-tap','vuex-router-sync']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: "file-loader?name=assets/[name].[hash:8].[ext]"


            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx', '.vue'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            filename: 'jczq/index.html',
            title: '竞彩足球',
            template: path.join(__dirname, '../src/jczq/index.ejs'),
            chunks: ['manifest','vendor', 'jczq']
        }),
        new HtmlWebpackPlugin({
            filename: 'jclq/index.html',
            title: '竞彩篮球',
            template: path.join(__dirname, '../src/jclq/index.ejs'),
            chunks: ['manifest','vendor', 'jclq']
        }),




    ]
};