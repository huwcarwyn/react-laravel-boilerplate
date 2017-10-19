const path = require('path')
const webpackBaseConfig = require(path.join(__dirname, 'webpack.base.config.js'))
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
  }),
]

if(process.env.NODE_ENV === 'production') {
  plugins.push(new UglifyJSPlugin())
}

const webpackConfig = Object.assign(webpackBaseConfig, {
  entry: {
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-dom', 'redux-form', 'axios', 'redux'],
    app: path.join(__dirname, 'resources/assets/js/app.jsx'),
  },

  plugins,
})

module.exports = webpackBaseConfig
