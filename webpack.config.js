const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    pbl: './client_scripts/pbl.js',
    client_calls: './client_scripts/client_calls.js',
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
};