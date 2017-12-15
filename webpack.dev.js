const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require(path.join(__dirname, 'webpack.common.js'))

module.exports = merge(common, {
  devtool: 'inline-source-map',
})
