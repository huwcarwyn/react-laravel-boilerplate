const path = require('path')
const merge = require('webpack-merge')
const common = require(path.join(__dirname, 'webpack.base.config.js'))
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  entry: {
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-dom', 'redux-form', 'axios', 'redux'],
    app: path.join(__dirname, 'resources/assets/js/app.jsx'),
  },
  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new UglifyJSPlugin()
  ]
})
