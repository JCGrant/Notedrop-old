var path = require('path');
var webpack = require('webpack');

var PATHS = {
  src:  path.resolve(__dirname, 'client'),
  dist:  path.resolve(__dirname, 'server/static/build'),
};

var config = {
  entry: path.resolve(PATHS.src, 'main.js'),
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        include: PATHS.src,
        loaders: [
          'babel?cacheDirectory',
        ],
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ]}
    ],
  },
};

module.exports = config;
