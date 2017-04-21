import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  devtool : 'source-map',
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
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title : 'React Starter',
      template : './src/index.ejs'
    })
  ]
};
