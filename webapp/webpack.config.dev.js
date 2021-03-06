'use strict'; // eslint-disable-line strict

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  resolve: {
    root: path.join(__dirname, 'source')
  },
  entry: [
    './source/client/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('source/shared/components', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192'},
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: path.join(__dirname, 'source/images'),
        include: [
          path.join(__dirname, 'source'),
          path.join(__dirname, 'app-home.js')
        ]
      },
      {test: /\.css$/, loaders: ['style', 'css', 'sass']},
    ]
  }
};
