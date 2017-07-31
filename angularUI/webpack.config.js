'use strict'

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const devtool = 'source-map'

const entry = {
  main: [
    'jquery',
    'angular',
    'bootstrap',
    'babel-polyfill',
    path.resolve(__dirname, 'src/main.js')
  ]
}

const output = {
  path: path.resolve(__dirname,'dist'),
  filename: '[name].[hash].js'
}

const resolve = {
  extensions:[
    '.js',
    '.less',
    '.html'
  ],
  modules: [
    'node_modules',
    'src',
    'lib'
  ]
}

const rules = [{
  test: /\.js$/,
  exclude: [/node_modules/],
  use: [
    'babel-loader'
  ]
}, {
  test:/\.(css|less)$/,
  use: [
    'style-loader',
    'css-loader',
    'less-loader'
  ]
}, {
  test: /\.html$/,
  exclude: [path.resolve(__dirname, 'src')],
  use: 'html-loader'
}, {
  test:/\.html$/,
  exclude: [/node_modules/, path.resolve(__dirname, 'static')],
  use: [
    'ngtemplate-loader',
    'html-loader'
  ]
}, {
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  use: [
    'url-loader?limit=1000'
  ]
}]

const plugins = [
  new HtmlWebpackPlugin({
    title: 'my-app',
    inject: 'head',
    template: path.resolve(__dirname, 'static/index.html')
  }),
  new DashboardPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    ng: 'angular',
    jQuery: 'jquery'
  })
]

const devServer = {
  compress: true,
  inline: true,
  overlay: true,
  historyApiFallback: true
}

module.exports = {
  devtool,
  entry,
  output,
  resolve,
  module: { rules },
  plugins,
  devServer
}
