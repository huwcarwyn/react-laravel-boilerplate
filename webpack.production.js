const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const tailwindcss = require('tailwindcss')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require(path.join(__dirname, 'webpack.common.js'))

module.exports = merge.smart(common, {
  entry: {
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-dom', 'redux-form', 'axios', 'redux'],
    app: path.join(__dirname, 'resources/assets/js/app.jsx')
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /app.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              import: 1,
              modules: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                './resources/assets/styles'
              ]
            }
          }]
        })
      },
      {
        test: /app.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                './resources/assets/styles'
              ]
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                tailwindcss('./tailwind.config.js')
              ]
            }
          }]
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin('./css/app.css')
  ]
})
