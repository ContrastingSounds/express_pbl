const glob = require('glob');
const path = require('path');

module.exports = {
  mode: 'development',
  // Pick up all files placed in the client_scripts directory
  entry: glob.sync('./client_scripts/*.js').reduce( (obj, el) => {
    obj[path.parse(el).name] = el;
    return obj
  }, {}),
  // entry: {
  //   pbl: './client_scripts/pbl.js',
  //   client_calls: './client_scripts/client_calls.js',
  //   server_calls: './client_scripts/server_calls.js',
  // },
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