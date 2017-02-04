/**
 * Created by lichun on 2017/1/19.
 */
const express = require('express');
const path = require('path');

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./build/webpack.dev.config");


const app = express();
// app.use(express.static(path.join(__dirname, 'dist')));

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    publicPath: "/" // Same as `output.publicPath` in most cases.
}));


app.listen(8080, function () {
    console.log("Listening on port 8080!");
});