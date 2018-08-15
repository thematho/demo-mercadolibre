const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

config.output = {
  filename: '[name].[chunkhash].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};
console.log(path.resolve(__dirname, 'dist'));
config.plugins = config.plugins.concat([
  // Copy assets imagenes etc into dist folder
  new CopyWebpackPlugin([{
    from: 'client/assets',
    to: 'assets'
  }]),

]);

module.exports = config;
