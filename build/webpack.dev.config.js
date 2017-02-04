/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base.config');
let entry = {vendor: base.entry.vendor};
Object.keys(base.entry).filter(key=>key!=='vendor').forEach(key=>{
    entry[key]= ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(base.entry[key])
});

module.exports = Object.assign({}, base, {
    devtool: '#cheap-module-eval-source-map',
    entry,
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