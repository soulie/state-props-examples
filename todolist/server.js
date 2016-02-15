var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var express = require('express');

var app = new express();
var port = 3000;

webpack(webpackConfig,function(err){
    if (err) return console.error(err);

    app.use(express.static('public'));
    app.use('/dist',express.static('dist'));

    app.listen(port, function(err) {
        if (err) return console.error(err);
        console.info("To-Do List Example: Listening on port %s.", port);
    });
});

