var path    = require('path');

module.exports = {
    entry:  './client',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets:['react','es2015']}
            }
        ]
    }
};
