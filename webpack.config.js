const path = require('path');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');
const config = require('./config.json');

module.exports = {
  entry: [
    './src/index.ts',
  ],
  output: {
    filename: 'CuillerBot.js',
    path: path.join(__dirname, '/dist'),
    publicPath : 'dist'
  },

    // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  target: 'node',

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loaders: ['awesome-typescript-loader'] },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __PUBLIC_KEY__: JSON.stringify(config.token),
    }),
  ],
};
