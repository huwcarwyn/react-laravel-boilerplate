const path = require('path')
const merge = require('webpack-merge')
const common = require(path.join(__dirname, 'webpack.base.config.js'))
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new UglifyJSPlugin()
  ]
})
