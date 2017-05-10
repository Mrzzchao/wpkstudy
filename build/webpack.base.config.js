/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    // context: path.resolve(__dirname, '../src'),
    entry: {
        app: [path.join(__dirname, '../src/main.js')],
        vendor: ['vue', 'vue-router', 'vuex', 'v-tap', 'vuex-router-sync', 'es6-promise', 'axios']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue'],
        alias: {
            '~common': path.resolve(__dirname, '../src/common'),
            '~components': path.resolve(__dirname, '../src/components'),
            '~pages': path.resolve(__dirname, '../src/pages'),
            '~assets': path.resolve(__dirname, '../src/assets'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.ejs'),
            chunks: ['manifest', 'vendor', 'app']
        })

        /* new CopyWebpackPlugin([
            {from: 'login', to: 'login'},
        ]) */
    ]
}
