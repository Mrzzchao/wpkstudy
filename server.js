/**
 * Created by lichun on 2017/1/19.
 */
const express = require('express');
const path = require('path');

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require("webpack");
const webpackConfig = require("./build/webpack.dev.config");


const app = express();
if(process.env.NODE_ENV==='production'){
    const compression = require('compression');
    app.use(compression());
    app.use(express.static(path.join(__dirname, 'dist'), {
        maxAge: '1d'
    }));
}else {
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        hot: true,
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: ()=>{}
    }));
}

app.listen(8080, function () {
    console.log("Listening on port 8080!");
});