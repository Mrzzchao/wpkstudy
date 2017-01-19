/**
 * Created by lichun on 2017/1/19.
 */
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(8080);