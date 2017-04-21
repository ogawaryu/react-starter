import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  entry : {
    application : './src/app.js'
  },
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
    path : path.join(__dirname, 'dist/assets'),
    publicPath : PRODUCTION ? '/assets/' : '/',
    filename: PRODUCTION ? '[name].min.js' : '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title : 'React Starter',
      template : './src/index.ejs',
      filename: PRODUCTION ? "../index.html" : "index.html"
    })
  ]
};
