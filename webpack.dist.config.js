const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

config.entry = {
  app: [
    path.join(__dirname, 'client/app/app.production.config.js')
  ]
};

config.output = {
  filename: '[name].[chunkhash].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};
config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  }),
  // Copy assets imagenes etc into dist folder
  new CopyWebpackPlugin([{
    from: 'client/assets',
    to: 'assets'
  }]),

  new CopyWebpackPlugin([{
    from: 'client/google515057b07800eeac.html',
    to: './google515057b07800eeac.html'
  }]),
]);

module.exports = config;
