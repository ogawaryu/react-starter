import path from 'path'
import webpack from 'webpack'

const DEVELOPMENT = process.env.NODE_ENV === 'development'
const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: 'source-map',
  entry: './src/app.js',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-2']
      }
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? 'bundle.min.js' : 'bundle.js'
  }
};
