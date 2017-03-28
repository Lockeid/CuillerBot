const config = require('./webpack.config');
const WebpackShellPlugin = require('webpack-shell-plugin');

config.plugins.push(new WebpackShellPlugin({onBuildEnd:['nodemon dist/CuillerBot.js']}));

module.exports = config;
